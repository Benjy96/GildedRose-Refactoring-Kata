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

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  private isLegendary(item: Item): boolean {
    return item.name == 'Sulfuras, Hand of Ragnaros';
  }

  private reduceSellIn(item: Item): void {
    item.sellIn -= 1;
  }

  private floorAndCapQuality(item: Item): void {
    if (item.quality > 50) item.quality = 50;
    if (item.quality < 0) item.quality = 0;
  }

  private updateDexterityVestQuality(item: Item): void {
    item.quality -= 1;
  }

  private updateAgedBrieQuality(item: Item): void {
    item.quality += 1;
    if (item.sellIn < 0 && item.quality < 50) item.quality += 1;
  }

  private updateElixirOfMongooseQuality(item: Item): void {
    item.quality -= 1;
  }

  private updateBackstagePassesQuality(item: Item): void {
    item.quality += 1;
    if (item.sellIn < 10) item.quality += 1;
    if (item.sellIn < 5) item.quality += 1;
    if (item.sellIn < 0) item.quality = 0;
  }

  private updateConjuredManaCakeQuality(item: Item): void {
    item.quality -= 1;
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
      
        if (item.name == '+5 Dexterity Vest') {
          this.updateDexterityVestQuality(item);
        }
        else if (item.name == 'Aged Brie') {
          this.updateAgedBrieQuality(item);
        }
        else if (item.name == 'Elixir of the Mongoose') {
          this.updateElixirOfMongooseQuality(item);
        }
        else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          this.updateBackstagePassesQuality(item);
        }
        else if (item.name == 'Conjured Mana Cake') {
          this.updateConjuredManaCakeQuality(item);
        }

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
