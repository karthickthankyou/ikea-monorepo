const Papa = require('papaparse')
const fs = require('fs')

const keys = [
  'id',
  'createdAt',
  'updatedAt',
  'name',
  'url',
  'price',
  'category',
  'subCategory',
  'outOfStock',
  'reviews',
  'rating',
  'discount',
  'old_price',
  'tags',
  'description',
  'seller',
  'images',
  'measurements',
]

const productsCSV = `69	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	DRÖNA Box - black 9 ¾x13 ¾x9 ¾ "	https://www.ikea.com/us/en/p/droena-box-black-90467065/	2.99	Home Décor	Storage boxes & baskets	\N	451	4.8	\N	\N	["Home Décor", "Storage boxes & baskets", "Paper & media boxes", "DRÖNA Box"]	\N	\N	\N	\N
70	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	BESTIGA Candlestick, set of 3 - black	https://www.ikea.com/us/en/p/bestiga-candlestick-set-of-3-black-60504677/	22.49	Home Décor	Candle holders & candles	\N	7	5.0	10	24.99	["Home Décor", "Candle holders & candles", "Candle holders", "BESTIGA Candlestick, set of 3"]	\N	\N	\N	\N
71	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	EKET Suspension rail 13 3/4 "	https://www.ikea.com/us/en/p/eket-suspension-rail-00340047/	5.0	Storage & organization	Shelving units, bookcases & storage options	\N	16	3.8	\N	\N	["Storage & organization", "Shelving units, bookcases & storage options", "Shelf units & cube storage", "EKET Suspension rail"]	\N	\N	\N	\N
72	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	SEVÄRD Tablecloth - dark blue 57x94 "	https://www.ikea.com/us/en/p/sevaerd-tablecloth-dark-blue-10364090/	15.99	Cookware & tableware	Table linen	\N	9	4.8	20	19.99	["Cookware & tableware", "Table linen", "Table cloths & runners", "SEVÄRD Tablecloth"]	\N	\N	\N	\N
73	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	SEKTION Wall cab w built-in range hood - white/Bodbyn dark green 30x15x20 "	https://www.ikea.com/us/en/p/sektion-wall-cab-w-built-in-range-hood-white-bodbyn-dark-green-s69388584/	191.0	Kitchen & appliances	Kitchen systems	\N	\N	\N	\N	\N	["Kitchen & appliances", "Kitchen systems", "SEKTION kitchen", "SEKTION kitchen cabinets", "Wall cabinets", "SEKTION Wall cab w built-in range hood"]	\N	\N	\N	\N
74	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	ÄPPLARÖ Table and 4 folding chairs, outdoor - brown stained/Frösön/Duvholmen dark gray	https://www.ikea.com/us/en/p/aepplaroe-table-and-4-folding-chairs-outdoor-brown-stained-froesoen-duvholmen-dark-gray-s49324512/	268.96	Furniture	Patio furniture	\N	10	4.3	\N	\N	["Furniture", "Patio furniture", "Outdoor dining sets", "ÄPPLARÖ Table and 4 folding chairs, outdoor"]	\N	\N	\N	\N
75	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	DRUVFLÄDER Hanging planter - water hyacinth/gray 5 ½ "	https://www.ikea.com/us/en/p/druvflaeder-hanging-planter-water-hyacinth-gray-00241815/	8.0	Home Décor	Flower pots & stands	\N	28	4.6	\N	\N	["Home Décor", "Flower pots & stands", "Indoor plant pots", "DRUVFLÄDER Hanging planter"]	\N	\N	\N	\N
76	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	PAX Corner wardrobe 82 7/8/83 7/8x92 7/8 "	https://www.ikea.com/us/en/p/pax-corner-wardrobe-s49420293/	1280.0	Storage & organization	Storage solution systems	\N	\N	\N	\N	\N	["Storage & organization", "Storage solution systems", "PAX system", "PAX wardrobes without doors", "PAX Corner wardrobe"]	\N	\N	\N	\N
77	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	LOBERGET / BLYSKÄR Swivel chair with pad - white/blue	https://www.ikea.com/us/en/p/loberget-blyskaer-swivel-chair-with-pad-white-blue-s19331892/	34.99	Furniture	Chairs	\N	12	4.8	\N	\N	["Furniture", "Chairs", "Desk chairs", "Desk chairs for home", "LOBERGET ", " BLYSKÄR Swivel chair with pad"]	\N	\N	\N	\N
78	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	GULLIGAST Baby gym	https://www.ikea.com/us/en/p/gulligast-baby-gym-90484277/	39.99	Baby & kids	Baby	\N	\N	\N	\N	\N	["Baby & kids", "Baby", "Baby toys", "Newborn", "GULLIGAST Baby gym"]	\N	\N	\N	\N
79	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	SEKTION Wall cabinet - white/Sinarp brown 15x15x40 "	https://www.ikea.com/us/en/p/sektion-wall-cabinet-white-sinarp-brown-s69404758/	137.0	Kitchen & appliances	Kitchen systems	\N	5	5.0	\N	\N	["Kitchen & appliances", "Kitchen systems", "SEKTION kitchen", "SEKTION kitchen cabinets", "Wall cabinets", "SEKTION Wall cabinet"]	\N	\N	\N	\N
80	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	SEKTION / MAXIMERA Base cabinet w 2 doors/3 drawers - white Järsta/high gloss light turquoise 36x24x30 "	https://www.ikea.com/us/en/p/sektion-maximera-base-cabinet-w-2-doors-3-drawers-white-jaersta-high-gloss-light-turquoise-s19414632/	524.0	Kitchen & appliances	Kitchen systems	\N	1	2.0	\N	\N	["Kitchen & appliances", "Kitchen systems", "SEKTION kitchen", "SEKTION kitchen cabinets", "Base cabinets", "SEKTION ", " MAXIMERA Base cabinet w 2 doors", "3 drawers"]	\N	\N	\N	\N
81	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	BEKANT Sit/stand underframe for table top - white 47 1/4x31 1/2 "	https://www.ikea.com/us/en/p/bekant-sit-stand-underframe-for-table-top-white-80263219/	349.0	Furniture	Tables & desks	\N	13	4.5	\N	\N	["Furniture", "Tables & desks", "Desks & computer desks", "Table & desk systems", "GALANT", "BEKANT system", "BEKANT desk underframes", "BEKANT Sit", "stand underframe for table top"]	\N	\N	\N	\N
120	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	STORSLINGA LED chandelier, 8-armed - black/white	https://www.ikea.com/us/en/p/storslinga-led-chandelier-8-armed-black-white-40488452/	69.99	Lighting	Lamps & light fixtures	\N	\N	\N	\N	\N	["Lighting", "Lamps & light fixtures", "Ceiling lights", "Pendants lights", "STORSLINGA LED chandelier, 8-armed"]	\N	\N	\N	\N
82	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	SEKTION Wall cabinet - white/Askersund light ash effect 15x15x20 "	https://www.ikea.com/us/en/p/sektion-wall-cabinet-white-askersund-light-ash-effect-s69369929/	63.0	Kitchen & appliances	Kitchen systems	\N	5	5.0	\N	\N	["Kitchen & appliances", "Kitchen systems", "SEKTION kitchen", "SEKTION kitchen cabinets", "Wall cabinets", "SEKTION Wall cabinet"]	\N	\N	\N	\N
83	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	LURÖY Slatted bed base Full/Double	https://www.ikea.com/us/en/p/luroey-slatted-bed-base-30292785/	30.0	Beds & mattresses	Bed slats	\N	483	3.7	\N	\N	["Beds & mattresses", "Bed slats", "LURÖY Slatted bed base"]	\N	\N	\N	\N
84	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	SEKTION High cabinet/pull-out int fittings - white/Hittarp off-white 24x24x90 "	https://www.ikea.com/us/en/p/sektion-high-cabinet-pull-out-int-fittings-white-hittarp-off-white-s79360216/	553.0	Kitchen & appliances	Kitchen systems	\N	\N	\N	\N	\N	["Kitchen & appliances", "Kitchen systems", "SEKTION kitchen", "SEKTION kitchen cabinets", "High cabinets", "SEKTION High cabinet", "pull-out int fittings"]	\N	\N	\N	\N
85	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	BESTÅ Wall-mounted cabinet combination - black-brown Hedeviken/dark brown stained oak veneer 70 7/8x16 1/2x25 1/4 "	https://www.ikea.com/us/en/p/besta-wall-mounted-cabinet-combination-black-brown-hedeviken-dark-brown-stained-oak-veneer-s19417862/	297.0	Storage & organization	Display & storage cabinets	\N	\N	\N	10	330.0	["Storage & organization", "Display & storage cabinets", "Buffet tables, sideboard buffets & buffet cabinets", "BESTÅ Wall-mounted cabinet combination"]	\N	\N	\N	\N
86	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	KNYCK Napkin holder - black	https://www.ikea.com/us/en/p/knyck-napkin-holder-black-80045448/	4.99	Cookware & tableware	Napkins & napkin holders	\N	47	4.8	\N	\N	["Cookware & tableware", "Napkins & napkin holders", "Napkin holders", "KNYCK Napkin holder"]	\N	\N	\N	\N
87	2022-03-24 16:07:32.302936+00	2022-03-24 16:07:32.302936+00	LÅNGFJÄLL Office chair with armrests - Gunnared beige/black	https://www.ikea.com/us/en/p/langfjaell-office-chair-with-armrests-gunnared-beige-black-s79177859/	179.0	Furniture	Chairs	\N	4	4.0	\N	\N	["Furniture", "Chairs", "Desk chairs", "Desk chairs for home", "LÅNGFJÄLL Office chair with armrests"]	\N	\N	\N	\N`

const sellers = [
  {
    uid: 'kdzlcSXqefg1ae3uwTQjJbSQId02',
    email: 'seller1@email.com',
    name: 'seller 1',
  },
  {
    uid: 'DOUEmNEwtiU9vUKwjVsit8rQ8hY2',
    email: 'seller2@email.com',
    name: 'seller 2',
  },
]

const random = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const run = () => {
  const allProducts = []
  Papa.parse(productsCSV, {
    step: function (row) {
      if (!row?.data) return null
      const cleaned = row.data.map((item) => (item === 'N' ? null : item))

      const [
        id,
        created_at,
        updated_at,
        name,
        url,
        price,
        category,
        sub_category,
        out_of_stock,
        reviews,
        rating,
        discount,
        old_price,
        tags,
        description,
        seller,
        images,
        measurements,
      ] = cleaned

      const obj = {
        // id: parseInt(id),
        // createdAt: created_at,
        // updatedAt: updated_at,
        name: name,
        url: url,
        price: parseFloat(price),
        category: category,
        subCategory: sub_category,
        outOfStock: out_of_stock ?? false,
        reviews: parseInt(reviews),
        rating: parseFloat(rating),
        discount: discount ? parseInt(discount) : null,
        oldPrice: old_price ? parseFloat(old_price) : null,
        tags: JSON.parse(tags),
        description: description ?? null,
        sellerId: random(sellers).uid,
        images: images ? JSON.parse(images) : [],
        measurements: measurements ? JSON.parse(measurements) : null,
      }
      console.log('Obj: ', obj)
      allProducts.push(obj)
      return obj
    },
    complete: function (full) {
      console.log('All done!!!!!!!!', allProducts)
      fs.writeFile('allProducts.json', JSON.stringify(allProducts), (err) => {
        if (err) {
          console.error(err)
          return
        }
        console.log('Data saved to file!')
      })
    },
  })
}

run()
