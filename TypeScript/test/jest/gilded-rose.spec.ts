import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('should match original output on day 1', () => {
    // Arrange
    const items = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      // this conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6)
    ];

    const expectedItemsResult = [
      new Item("+5 Dexterity Vest", 9, 19),
      new Item("Aged Brie", 1, 1), 
      new Item("Elixir of the Mongoose", 4, 6), 
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21),
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
      new Item("Conjured Mana Cake", 2, 5)
    ];

    const gildedRose = new GildedRose(items);

    // Act
    const resultItems = gildedRose.updateQuality();
    
    // Assert
    expect(resultItems).toStrictEqual(expectedItemsResult);
  });

  it('should match original output on day 10', () => {
    // Arrange
    const items = [
      new Item("+5 Dexterity Vest", 10, 20), //
      new Item("Aged Brie", 2, 0), //
      new Item("Elixir of the Mongoose", 5, 7), //
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      // this conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6)
    ];

    const expectedItemsResult = [
      new Item("+5 Dexterity Vest", 0, 10),
      new Item("Aged Brie", -8, 18), 
      new Item("Elixir of the Mongoose", -5, 0), 
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 35),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", -5, 0),
      new Item("Conjured Mana Cake", -7, 0)
    ];

    const gildedRose = new GildedRose(items);

    // Act
    var resultItems: Item[] = [];
    for (let i = 0; i < 10; i++) {
      resultItems = gildedRose.updateQuality();
    }

    // Assert
    expect(resultItems).toStrictEqual(expectedItemsResult);
  });

  it('should match +5 Dexterity Vest on day 10', () => {
    // Arrange
    const items = [
      new Item("+5 Dexterity Vest", 10, 20), 
    ];

    const expectedItemsResult = [
      new Item("+5 Dexterity Vest", 0, 10),
    ];

    const gildedRose = new GildedRose(items);

    // Act
    var resultItems: Item[] = [];
    for (let i = 0; i < 10; i++) {
      resultItems = gildedRose.updateQuality();
    }

    // Assert
    expect(resultItems).toStrictEqual(expectedItemsResult);
  });

  it('should match Aged Brie on day 10', () => {
    // Arrange
    const items = [
      new Item("Aged Brie", 2, 0), //
    ];

    const expectedItemsResult = [
      new Item("Aged Brie", -8, 18), 
    ];

    const gildedRose = new GildedRose(items);

    // Act
    var resultItems: Item[] = [];
    for (let i = 0; i < 10; i++) {
      resultItems = gildedRose.updateQuality();
    }

    // Assert
    expect(resultItems).toStrictEqual(expectedItemsResult);
  });

  it('should match Elixir of the Mongoose on day 10', () => {
    // Arrange
    const items = [
      new Item("Elixir of the Mongoose", 5, 7), //
    ];

    const expectedItemsResult = [
      new Item("Elixir of the Mongoose", -5, 0), 
    ];

    const gildedRose = new GildedRose(items);

    // Act
    var resultItems: Item[] = [];
    for (let i = 0; i < 10; i++) {
      resultItems = gildedRose.updateQuality();
    }

    // Assert
    expect(resultItems).toStrictEqual(expectedItemsResult);
  });

  it('should match Sulfuras, Hand of Ragnaros on day 10', () => {
    // Arrange
    const items = [
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    ];

    const expectedItemsResult = [
      new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    ];

    const gildedRose = new GildedRose(items);

    // Act
    var resultItems: Item[] = [];
    for (let i = 0; i < 10; i++) {
      resultItems = gildedRose.updateQuality();
    }

    // Assert
    expect(resultItems).toStrictEqual(expectedItemsResult);
  });

  it('should match Backstage passes to a TAFKAL80ETC concert on day 10', () => {
    // Arrange
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    ];

    const expectedItemsResult = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 35),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", -5, 0),
    ];

    const gildedRose = new GildedRose(items);

    // Act
    var resultItems: Item[] = [];
    for (let i = 0; i < 10; i++) {
      resultItems = gildedRose.updateQuality();
    }

    // Assert
    expect(resultItems).toStrictEqual(expectedItemsResult);
  });

  it('should match Conjured Mana Cake on day 10', () => {
    // Arrange
    const items = [
      new Item("Conjured Mana Cake", 3, 6)
    ];

    const expectedItemsResult = [
      new Item("Conjured Mana Cake", -7, 0)
    ];

    const gildedRose = new GildedRose(items);

    // Act
    var resultItems: Item[] = [];
    for (let i = 0; i < 10; i++) {
      resultItems = gildedRose.updateQuality();
    }

    // Assert
    expect(resultItems).toStrictEqual(expectedItemsResult);
  });

});
