export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export interface ItemUpdater {
  updateQuality(item: Item): void;
}

export class DefaultItemUpdater implements ItemUpdater {
  updateQuality(item: Item): void {
      
  }
}

export class DexerityVestUpdater implements ItemUpdater {
  updateQuality(item: Item): void {
    item.quality -= 1;
  }
}

export class AgedBrieUpdater implements ItemUpdater {
  updateQuality(item: Item): void {
    item.quality += 1;
    if (item.sellIn < 0 && item.quality < 50) item.quality += 1;
  }
}

export class ElixirOfMongooseUpdater implements ItemUpdater {
  updateQuality(item: Item): void {
    item.quality -= 1;
  }
}

export class BackstagePassesUpdater implements ItemUpdater {
  updateQuality(item: Item): void {
    item.quality += 1;
    if (item.sellIn < 10) item.quality += 1;
    if (item.sellIn < 5) item.quality += 1;
    if (item.sellIn < 0) item.quality = 0;
  }
}

export class ConjuredManaCakeUpdater implements ItemUpdater {
  updateQuality(item: Item): void {
    item.quality -= 1;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  isLegendary(item: Item): boolean {
    return item.name == 'Sulfuras, Hand of Ragnaros';
  }

  protected reduceSellIn(item: Item): void {
    item.sellIn -= 1;
  }

  protected floorAndCapQuality(item: Item): void {
    if (item.quality > 50) item.quality = 50;
    if (item.quality < 0) item.quality = 0;
  }

  protected getUpdater(item: Item): ItemUpdater {
    switch (item.name) {
      case '+5 Dexterity Vest':
        return new DexerityVestUpdater();
      case 'Aged Brie':
        return new AgedBrieUpdater();
      case 'Elixir of the Mongoose':
        return new ElixirOfMongooseUpdater();
      case 'Backstage passes to a TAFKAL80ETC concert':
        return new BackstagePassesUpdater();
      case 'Conjured Mana Cake':
        return new ConjuredManaCakeUpdater();
      default:
        return new DefaultItemUpdater();
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let useRefactor = true;
      if (useRefactor) {
        var item = this.items[i];

        if (this.isLegendary(item)) {
          continue;
        }

        this.reduceSellIn(item);

        const updater = this.getUpdater(item);
        updater.updateQuality(item);
    
        this.floorAndCapQuality(item);
      }
      // ORIGINAL
      else {
        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
              this.items[i].quality = this.items[i].quality - 1
            }
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1
                }
              }
              if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1
                }
              }
            }
          }
        }
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        if (this.items[i].sellIn < 0) {
          if (this.items[i].name != 'Aged Brie') {
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].quality > 0) {
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                  this.items[i].quality = this.items[i].quality - 1
                }
              }
            } else {
              this.items[i].quality = this.items[i].quality - this.items[i].quality
            }
          } else {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1
            }
          }
        }
      }
    } // FOR

    return this.items;
  }
}
