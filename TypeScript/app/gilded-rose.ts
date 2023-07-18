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

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let useRefactor = true;
      if (useRefactor) {
        var item = this.items[i];

        // Legendary items
        if (item.name == 'Sulfuras, Hand of Ragnaros') {
          continue;
        }

        // Non-legendary
        item.sellIn -= 1;
      
        if (item.name == '+5 Dexterity Vest') {
          item.quality -= 1;
        }

        if (item.name == 'Aged Brie') {
          item.quality += 1;
          if (item.sellIn < 0 && item.quality < 50) item.quality += 1;
        }

        if (item.name == 'Elixir of the Mongoose') {
          item.quality -= 1;
        }

        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          item.quality += 1;
          if (item.sellIn < 10) item.quality += 1;
          if (item.sellIn < 5) item.quality += 1;
          if (item.sellIn < 0) item.quality = 0;
        }

        if (item.name == 'Conjured Mana Cake') {
          item.quality -= 1;
        }

        // Floor/Cap quality
        if (item.quality > 50) item.quality = 50;
        if (item.quality < 0) item.quality = 0;
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
