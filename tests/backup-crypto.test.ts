// Encryption round-trip for the Gist backup (WebCrypto, Node 20+).
import { describe, expect, it } from 'vitest';
import { decryptJson, encryptJson } from '@/lib/backup';

describe('backup encryption', () => {
  const sample = { schemaVersion: 1, mastery: [{ conceptId: 'money', score: 72 }] };

  it('round-trips with the right passphrase', async () => {
    const encrypted = await encryptJson(sample, 'correct horse battery staple');
    expect(encrypted.v).toBe(1);
    expect(encrypted.data).not.toContain('money');
    const decrypted = await decryptJson<typeof sample>(encrypted, 'correct horse battery staple');
    expect(decrypted).toEqual(sample);
  });

  it('fails with the wrong passphrase', async () => {
    const encrypted = await encryptJson(sample, 'right');
    await expect(decryptJson(encrypted, 'wrong')).rejects.toThrow();
  });

  it('uses a fresh salt and iv per encryption', async () => {
    const a = await encryptJson(sample, 'p');
    const b = await encryptJson(sample, 'p');
    expect(a.salt).not.toBe(b.salt);
    expect(a.iv).not.toBe(b.iv);
    expect(a.data).not.toBe(b.data);
  });
});
