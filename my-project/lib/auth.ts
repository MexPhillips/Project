import { createHmac, randomBytes, pbkdf2Sync, timingSafeEqual } from "crypto";

export const AUTH_COOKIE_NAME = "handcrafted_session";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const AUTH_COOKIE_SECRET = process.env.AUTH_COOKIE_SECRET || "dev_secret_change_me_change_this";
const PBKDF2_ITERATIONS = 100_000;
const PBKDF2_KEYLEN = 64;
const PBKDF2_DIGEST = "sha512";

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const derived = pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, PBKDF2_KEYLEN, PBKDF2_DIGEST);
  return `${salt}:${derived.toString("hex")}`;
}

export function verifyPassword(password: string, storedHash: string) {
  const [salt, key] = storedHash.split(":");
  if (!salt || !key) {
    return false;
  }

  const derived = pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, PBKDF2_KEYLEN, PBKDF2_DIGEST);
  const keyBuffer = Buffer.from(key, "hex");

  if (keyBuffer.length !== derived.length) {
    return false;
  }

  return timingSafeEqual(derived, keyBuffer);
}

function signSession(data: string) {
  return createHmac("sha256", AUTH_COOKIE_SECRET).update(data).digest("hex");
}

export function createSessionToken(userId: number) {
  const expiresAt = Math.floor(Date.now() / 1000) + COOKIE_MAX_AGE;
  const payload = `${userId}:${expiresAt}`;
  const signature = signSession(payload);
  return `${payload}:${signature}`;
}

export function verifySessionToken(token: string) {
  const [userIdRaw, expiresAtRaw, signature] = token.split(":");
  if (!userIdRaw || !expiresAtRaw || !signature) {
    return null;
  }

  const payload = `${userIdRaw}:${expiresAtRaw}`;
  const expected = signSession(payload);

  if (!timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expected, "hex"))) {
    return null;
  }

  const expiresAt = Number(expiresAtRaw);
  if (Number.isNaN(expiresAt) || expiresAt < Math.floor(Date.now() / 1000)) {
    return null;
  }

  return Number(userIdRaw);
}

export function createSessionCookie(userId: number) {
  const token = createSessionToken(userId);
  const secureFlag = process.env.NODE_ENV === "production" ? "Secure; " : "";

  return `${AUTH_COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; ${secureFlag}Max-Age=${COOKIE_MAX_AGE};`;
}

export function clearSessionCookie() {
  const secureFlag = process.env.NODE_ENV === "production" ? "Secure; " : "";

  return `${AUTH_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; ${secureFlag}Max-Age=0;`;
}
