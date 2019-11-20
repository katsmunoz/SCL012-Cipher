describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(window.cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(window.cipher.encode(33, "abcdefghijklmnopqrstuvwxyz"), 'hijklmnopqrstuvwxyzabcdefg');
    });

    it('debería retornar "h i j k l m n o p q r s t u v w x y z a b c d e f g" para "a b c d e f g h i j k l m n o p q r s t u v w x y z" con offset 33', () => {
      assert.equal(window.cipher.encode(33, "a b c d e f g h i j k l m n o p q r s t u v w x y z"), 'h i j k l m n o p q r s t u v w x y z a b c d e f g');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(window.cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(window.cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), 'abcdefghijklmnopqrstuvwxyz');
    });

    it('debería retornar "a b c d e f g h i j k l m n o p q r s t u v w x y z" para "h i j k l m n o p q r s t u v w x y z a b c d e f g" con offset 33', () => {
      assert.equal(window.cipher.decode(33, "h i j k l m n o p q r s t u v w x y z a b c d e f g"), 'a b c d e f g h i j k l m n o p q r s t u v w x y z');
    });
  });
});