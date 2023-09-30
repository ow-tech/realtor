export const cdnPath = `https://ik.imagekit.io/valcom123/images/manseel`;

export const neighbourhoodData = {
  Business_Bay: {
    backgroundImage: `${cdnPath}/assets/BusinessBayBg.jpg`,
    neighbourhood: "Business Bay",
    WelcomeDesc: (
      <div className="specificNeighbourPara">
        <p>
          Straddling Dubai Creek, Business Bay is a contemporary financial
          district packed with corporate high-rises, stylish apartment
          buildings, and swanky hotels.
        </p>
        <p>
          Dubai Water Canal has jogging and cycling tracks plus a colorful
          mechanical waterfall. Mid-priced stores fill Bay Avenue mall, along
          with family-friendly dining options.
        </p>
        <p>
          Smart waterside restaurants serve Lebanese dishes, Asian street
          snacks, and high-end seafood.
        </p>
      </div>
    ),
    expectWhatDesc:
      "A contemporary, futuristic and manageable neighborhood easy to commute.",
    marketDesc:
      "Mid end to high end, mostly high rise building with stunning views.",
    loveThingsDesc:
      "Relaxing strolls along the waterfront, outdoor activities, dining and lounging.",

    map: `${cdnPath}/assets/businessBayMap.png`,
    neighbours: {
      north: "Sheikh Zayed Road",
      west: "Al Khail Road",
      south: "Downtown Dubai",
      east: "Al Qouz",
    },
    commutes: [
      {
        name: "Dubai DXB Airport",
        distance: "18.7 km",
        car: "15 min.",
        metro: "46 min.",
        walking: "3 hrs 51 min.",
      },
      {
        name: "Dubai DWC Airport",
        distance: "47.7 km",
        car: "35 min.",
        metro: "1 hr 53 min.",
        walking: null,
      },
      {
        name: "Public Beach",
        distance: "10.9 km",
        car: "16 min.",
        metro: "41 min.",
        walking: "1 hr 58 min.",
      },
      {
        name: "Dubai Mall/Burj Khalifa",
        distance: "1.8 km",
        car: "6 min.",
        metro: "12 min.",
        walking: "12 min.",
      },
      {
        name: "Expo City",
        distance: "32.2 km",
        car: "26 min.",
        metro: "1 hr 24 min.",
        walking: "7 hr 32 min.",
      },
      {
        name: "Dubai Marina",
        distance: "20.1 km",
        car: "18 min.",
        metro: "55 min.",
        walking: "4 hr 26 min.",
      },
    ],
    aroundTheBlockDesc: (
      <div className="specificNeighbourPara">
        <p>
          Business Bay is Dubai’s main business district covering an area of 5,9
          million m2 or 64 million square feet. It is divided into a southeast
          and a northwest part by the Dubai Canal. The masterplan was developed
          in 2003 by Dubai Properties, one of Dubai’s large government
          developers.
        </p>
        <p>
          As more and more buildings get completed and empty plots disappear,
          Business Bay becomes a lively business and residential district. Its
          excellent location within Dubai makes it the place to be for more than
          15 luxurious 5-star hotels and over 20 4-star hotels.
        </p>
      </div>
    ),
    aroundTheBlockImages: [
      {
        imageUrl: `${cdnPath}/mag/bb/atb/1.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/atb/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/atb/3.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/atb/4.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
    ],
    whatToExpectDesc: (
      <div className="specificNeighbourPara">
        <p>
          Even so Business Bay is the pulsating business heart of Dubai, it is
          not a noisy place compared to other major cities.
        </p>
        <p>
          Business Bay offers stunning views from almost every angle, a
          waterfront life, small parks and countless options for dining on every
          level. For sport enthusiasts, there are multiple running and cycling
          tracks which relate to Dubai’s vast cycling track network of more than
          500 km.
        </p>
      </div>
    ),
    whatToExpectImages: [
      {
        imageUrl: `${cdnPath}/mag/bb/wte/1.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/wte/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/wte/3.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/wte/4.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/wte/5.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/wte/6.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/wte/7.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/wte/8.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: (
          <div className="specificNeighbourPara">
            <p>
              The Dubai Canal Waterfall is illuminated at nighttime and motion
              operated. It cascades down on both sides of Sheikh Zayed Road
              bridge but stops for vessels to pass.
            </p>
            <p>
              Enjoy the impressive sight while strolling alongside the Canal.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/bb/wte/9.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/wte/10.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/wte/11.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
    ],
    theMarketDesc: (
      <div className="specificNeighbourPara">
        <p>
          Super high end, high rise residential buildings like “The Volante” are
          also available as mid end residential complexes like the “Executive
          Towers” with almost 1,800 apartments in 10 towers. Some of the world's
          most renowned architects like Zaha Hadid with her “The Opus” tower or
          the JW Marriott Hotel Towers, the second highest twin towers in the
          world designed by Ashok Korgaonkar amongst many others formed Business
          Bay into one of the most beautiful business districts in the world.
        </p>
      </div>
    ),
    theMarketImages: [
      {
        imageUrl: `${cdnPath}/mag/bb/tm/1.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/tm/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/tm/3.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/tm/4.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/tm/5.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/tm/6.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
    ],
    thingsToLoveDesc: (
      <div className="specificNeighbourPara">
        <p>
          Business Bay is a multicultural hub for all nationalities with endless
          options for dining, clubbing or just to hang out with friends enjoying
          a drink. Spectacular rooftop bars with truly breathtaking views (and
          similar prices) can also be found, along with restaurants where you
          can feed a family with just 50 Dirhams.
        </p>
        <p>
          Depending on where you live in Business Bay, Dubai Mall with all its
          entertainment options is just a short walk or a short ride away.
        </p>
      </div>
    ),
    thingsToLoveImages: [
      {
        imageUrl: `${cdnPath}/mag/bb/ttl/1.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/ttl/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/ttl/3.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/ttl/4.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/ttl/5.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/ttl/6.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/ttl/7.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/ttl/8.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/bb/ttl/9.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
    ],
  },
  Downtown_Dubai: {
    backgroundImage: `${cdnPath}/mag/dtd/hero/hero.jpg`,
    neighbourhood: "Downtown Dubai",
    WelcomeDesc: (
      <div className="specificNeighbourPara">
        <p>
          Downtown is the 2 square kilometer pulsating heart of Dubai with
          plenty of wow-factors for residents and tourists alike.
          Pedestrian-friendly designed with wide promenades, Downtown Dubai
          invites visitors and residents for strolls along Sheikh Mohammed bin
          Rashid Boulevard with its countless and irresistible restaurants and
          cafes.
        </p>
        <p>
          Downtown is perfectly located between the city’s two largest business
          districts, Dubai International Financial Centre in the north and
          Business Bay in the south.
        </p>
      </div>
    ),
    expectWhatDesc:
      "Ultimate urban lifestyle with iconic landmarks, entertainment and glamour.",
    marketDesc:
      "Simply one of the most prestigious and splendid neighborhoods on earth.",
    loveThingsDesc:
      "Phenomenal architecture, world-class shopping and beautiful promenades.",
    map: `${cdnPath}/assets/downTownMap.jpg`,
    neighbours: {
      north: "Al Asayel Road",
      west: "Sheikh Zayed Road",
      south: "Burj Khalifa Boulevard",
      east: "Financial Center Road",
    },
    commutes: [
      {
        name: "Dubai DXB Airport",
        distance: "18.7 km",
        car: "15 min.",
        metro: "46 min.",
        walking: "3 hr 51 min.",
      },
      {
        name: "Dubai DWC Airport",
        distance: "47.7 km",
        car: "35 min.",
        metro: "1 hr 53 min.",
        walking: null,
      },
      {
        name: "Public Beach",
        distance: "10.9 km",
        car: "16 min.",
        metro: "41 min.",
        walking: "1 hr 58 min.",
      },
      {
        name: "Dubai Mall/Burj Khalifa",
        distance: "1.8 km",
        car: "6 min.",
        metro: "12 min.",
        walking: "12 min.",
      },
      {
        name: "Expo City",
        distance: "32.2 km",
        car: "26 min.",
        metro: "1 hr 24 min.",
        walking: "7 hr 32 min.",
      },
      {
        name: "Dubai Marina",
        distance: "20.1 km",
        car: "18 min.",
        metro: "55 min.",
        walking: "4 hr 26 min.",
      },
    ],
    aroundTheBlockDesc: (
      <div className="specificNeighbourPara">
        <p>
          Downtown is the 2 square kilometer pulsating heart of Dubai with
          plenty of wow-factors for residents and tourists alike.
          Pedestrian-friendly designed with wide promenades, Downtown Dubai
          invites visitors and residents for strolls along Sheikh Mohammed bin
          Rashid Boulevard with its countless and irresistible restaurants and
          cafés.
        </p>
        <p>
          Downtown is perfectly located between the city’s two largest business
          districts, Dubai International Financial Centre in the north and
          Business Bay in the south.
        </p>
      </div>
    ),
    aroundTheBlockImages: [
      {
        imageUrl: `${cdnPath}/mag/dtd/atb/1.jpg`,
        buildingName: "burj khalifa",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/atb/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/atb/3.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/atb/5.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/atb/6.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: (
          <div className="specificNeighbourPara">
            <p>
              Multiple landmarks can be found within a walking distance: Burj
              Khalifa, the world’s largest tower, Souk al Bahar, the traditional
              Arabic style market, Dubai Fountains, the famous engineering
              marvel with the music, water, and light show, and Dubai Opera, the
              fantastic and unique entertainment destination in the Middle East,
              just to name the most important.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/atb/7.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/atb/10.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/atb/11.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
    ],
    whatToExpectDesc: (
      <div className="specificNeighbourPara">
        <p>
          Centerpiece in Downtown Dubai beside the Burj Khalifa is the Dubai
          Mall, one of the world’s largest malls with 5.9 million sqft. internal
          floor area, which hosts more than 1,200 stores and more than 200 food
          and beverage outlets, an Olympic size ice rink, and the famous
          aquarium and underwater zoo. Dubai Mall is the world's most-visited
          shopping and leisure destination and is attracting more than 60
          million visitors a year.
        </p>
      </div>
    ),
    whatToExpectImages: [
      {
        imageUrl: `${cdnPath}/mag/dtd/wte/1.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/wte/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/wte/3.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/wte/4.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/wte/6.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/wte/7.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/wte/8.jpg`,
        buildingName: "Image 8",
        buildingRefNumber: "REF008",
        grid: 2,
        text: "",
      },
      // Add more image objects here
    ],
    theMarketDesc: (
      <div className="specificNeighbourPara">
        <p>
          Downtown Dubai, as one of the most prestigious and splendid
          neighborhoods on earth, is the true centerpiece of the emirate Dubai.
          It is a mix of modern and traditional architecture – impressive and
          gleaming towers next to beautiful Arabian style low-rise buildings in
          the old town district. And there are still pockets of green to
          explore.
        </p>
        <p>
          Several super luxury 5-star hotels are located in Downtown Dubai and
          attract tourists throughout the whole year.
        </p>
      </div>
    ),
    theMarketImages: [
      {
        imageUrl: `${cdnPath}/mag/dtd/tm/1.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/tm/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/tm/4.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/tm/5.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/tm/6.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/tm/7.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/tm/10.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/tm/11.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/tm/14.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/tm/12.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      // Add more image objects here
    ],
    thingsToLoveDesc: (
      <div className="specificNeighbourPara">
        <p>
          Take a stroll around the man-made Burj Khalifa lake with over 120,000
          m², or down the boulevard, watch the supercars driving by and take a
          break in one of the mouthwatering al fresco dining restaurants and
          café options. In the evening, when the tall palm trees are illuminated
          by fairy lights, the atmosphere is so special and gives you the
          feeling that life is truly great. Watch people passing by, dressed up
          to the nines heading to a concert, Opera performance, or other events
          at the Opera.
        </p>
      </div>
    ),
    thingsToLoveImages: [
      {
        imageUrl: `${cdnPath}/mag/dtd/ttl/1.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/ttl/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/ttl/4.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/ttl/5.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: (
          <div className="specificNeighbourPara">
            <p>
              The most well-known event of the year is the new year countdown,
              live broadcasted to the whole world with its awe-inspiring
              fireworks. It brings people from the whole world together, just to
              experience it once in a lifetime.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/ttl/6.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: (
          <div className="specificNeighbourPara">
            <p>
              The boulevard hosts also other events like parades for the
              national day or motorcades of classic cars. Something is always
              happening like free outdoor film screenings, concerts, food, and
              craft markets that support local brands, making sure there are no
              dull moments at Downtown Dubai for its inhabitants.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/ttl/8.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/ttl/9.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: (
          <div className="specificNeighbourPara">
            <p>
              You can have a dinner in one of the celebrity chefs' restaurants
              or just enjoy your night out with friends and great food in a
              spectacular environment.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/ttl/11.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dtd/ttl/123.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      // Add more image objects here
    ],
  },
  Dubai_Marina: {
    backgroundImage: `${cdnPath}/mag/dm/hero/1.jpg`,
    neighbourhood: "Dubai Marina",
    WelcomeDesc: (
      <div className="specificNeighbourPara">
        <p>
          Dubai Marina, built on a 3-kilometer (2 miles) long stretch of
          shoreline, is today the world's largest man-made marina and one of the
          most beautiful canal cities globally.
        </p>
        <p>
          Around a central waterway with countless marina berths, more than 200
          towers are offering spectacular views over the Persian Gulf and the
          marvelous marina.
        </p>
      </div>
    ),
    expectWhatDesc:
      "A contemporary, unique canal city with multiple ultra-high-rise towers offering stunning views.",
    marketDesc:
      "More than 200 residential towers from all building classes with great access to public transportation.",
    loveThingsDesc:
      "Countless options for dining on all levels, multicultural waterfront living and easy beach access.",
    map: `${cdnPath}/assets/dubaiMarinaMap.jpg`,
    neighbours: {
      north: "Persian Gulf",
      west: "Sheikh Zayed Road",
      south: "Jebel Ali",
      east: "Internet City",
    },
    commutes: [
      {
        name: "Dubai DXB Airport",
        distance: "18.7 km",
        car: "15 min.",
        metro: "46 min.",
        walking: "3 hr 51 min.",
      },
      {
        name: "Dubai DWC Airport",
        distance: "47.7 km",
        car: "35 min.",
        metro: "1 hr 53 min.",
        walking: null,
      },
      {
        name: "Public Beach",
        distance: "10.9 km",
        car: "16 min.",
        metro: "41 min.",
        walking: "1 hr 58 min.",
      },
      {
        name: "Dubai Mall/Burj Khalifa",
        distance: "1.8 km",
        car: "6 min.",
        metro: "12 min.",
        walking: "12 min.",
      },
      {
        name: "Expo City",
        distance: "32.2 km",
        car: "26 min.",
        metro: "1 hr 24 min.",
        walking: "7 hr 32 min.",
      },
      {
        name: "Dubai Marina",
        distance: "20.1 km",
        car: "18 min.",
        metro: "55 min.",
        walking: "4 hr 26 min.",
      },
    ],
    aroundTheBlockDesc: (
      <div className="specificNeighbourPara">
        <p>
          The canal with more than 8 km of landscaped public walkways is the
          center of the marina and occupies more than 12% of the total space.
        </p>
        <p>
          The two sea exits of the canal make part of Dubai Marina an island,
          including the neighboring district Jumeirah Beach Residences (JBR)
          which separates Dubai Marina from the sea.
        </p>
      </div>
    ),
    aroundTheBlockImages: [
      {
        imageUrl: `${cdnPath}/mag/dm/atb/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/atb/6.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/atb/5.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/atb/4.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: (
          <div className="specificNeighbourPara">
            <p>
              The latest added mode of transport, Dubai tram was opened in
              November 2014, links Dubai Metro and the Palm Monorail, and runs
              along Al Sufouh Road and Jumeirah Beach Road.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/dm/atb/7.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/atb/1.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/atb/3.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
    ],
    whatToExpectDesc: (
      <div className="specificNeighbourPara">
        <p>
          Plenty of tourists strolling around in Dubai Marina mixing up with
          residents making Dubai Marina a bustling area with a unique flair.
        </p>
        <p>
          Seemingly conflicting architecture combines to create one of the most
          beautiful skylines in the city.
        </p>
      </div>
    ),
    whatToExpectImages: [
      {
        imageUrl: `${cdnPath}/mag/dm/wte/5.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/wte/3.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/wte/1.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/wte/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/wte/4.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/wte/6.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/wte/7.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      // Add more image objects here
    ],
    theMarketDesc: (
      <div className="specificNeighbourPara">
        <p>
          Dubai Marina is for sure one of the top residential areas in Dubai.
          Many residents fall in love with Dubai Marina because of the unique
          waterfront living in this magical neighborhood.
        </p>
        <p>
          Prices for a studio start around AED 35k, whereas 1-bedroom apartments
          are available from AED 40k to AED 100k. 2-bedroom units start around
          AED 55k and top out at AED 200k. The annual rent for 3-bedroom
          apartments is between AED 80k and AED 300k. Large penthouses can cost
          anywhere between AED 350k and AED 1m. Apartments in Marina are
          generally larger in size than in other areas. Apart from apartments,
          there are a few podium-level townhouses available in some towers.
        </p>
      </div>
    ),
    theMarketImages: [
      {
        imageUrl: `${cdnPath}/mag/dm/tm/6.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/tm/5.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/tm/1.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/tm/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/tm/3.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/tm/4.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      // Add more image objects here
    ],
    thingsToLoveDesc: (
      <div className="specificNeighbourPara">
        <p>
          Dubai Marina is a pedestrian friendly neighborhood with almost
          everything available within a walking distance. As traffic is
          sometimes very dense and parking options are rare, many residents
          prefer to use the tram. The laid back waterfront living within this
          with high rises packed, bustling district and the close proximity to
          the beach create a living experience nowhere else can be found.
        </p>
      </div>
    ),
    thingsToLoveImages: [
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/10.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/11.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: (
          <div className="specificNeighbourPara">
            <p>
              Schools of Oman cownose rays, eagle rays, whale sharks, and other
              large species of marine wildlife are regular visitors in Dubai
              Marina.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/12.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/13.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/14.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: (
          <div className="specificNeighbourPara">
            <p>
              There are plenty of sport activities in this amazing neighborhood.
              You can experience a breathtaking free-fall and parachute
              experience with Skydive Dubai. Take the leap above the iconic Palm
              Jumeirah and see Dubai Marina from an entirely different
              perspective.
            </p>
            <p>
              Multiple running tracks, the world’s largest urban zip line
              experience, or just a beach volleyball game at sunset – you have
              the choice.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/15.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/16.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/17.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/18.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/3.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/6.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/5.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/7.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/4.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: (
          <div className="specificNeighbourPara">
            <p>
              The countless options for dining range from spectacular fine
              dining to street food of all varieties.
            </p>
            <p>
              Nightlife also has many options, from classic lounges and rooftop
              bars with breathtaking views, to trendy beach clubs with large
              pools like Zero Gravity or Bla Bla with its more than 20 bars.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/8.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/1.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/9.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/19.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/20.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/21.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/dm/ttl/22.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      // Add more image objects here
    ],
  },
  Dubai_International_Financial_Center: {
    backgroundImage: `${cdnPath}/mag/difc/hero/1.jpg`,
    neighbourhood: "DIFC",
    WelcomeDesc: (
      <div className="specificNeighbourPara">
        <p>
          Middle East’s leading financial hub is a district where business meets
          art and culinary excellence.
        </p>
        <p>
          As a special economic zone, DIFC spans over 110 ha (272 acres) and has
          its own independent internationally regulated judicial and regulatory
          system. It is home to hundreds of financial institutions, wealth
          funds, REITs, and investors.
        </p>
      </div>
    ),
    expectWhatDesc:
      "A contemporary, futuristic designed financial district with an excellent infrastructure.",
    marketDesc:
      "High rise high-end office and residential buildings with spectacular architecture and stunning views.",
    loveThingsDesc:
      "An unparalleled destination for business, arts and fine dining.",
    map: `${cdnPath}/assets/difcMap.jpg`,
    neighbours: {
      north: "Sheikh Zayed Road",
      west: "Al Mustaqbal Street",
      south: "Downtown Dubai",
      east: "2nd Za'abeel Road",
    },
    commutes: [
      {
        name: "Dubai DXB Airport",
        distance: "18.7 km",
        car: "15 min.",
        metro: "46 min.",
        walking: "3 hr 51 min.",
      },
      {
        name: "Dubai DWC Airport",
        distance: "47.7 km",
        car: "35 min.",
        metro: "1 hr 53 min.",
        walking: null,
      },
      {
        name: "Public Beach",
        distance: "10.9 km",
        car: "16 min.",
        metro: "41 min.",
        walking: "1 hr 58 min.",
      },
      {
        name: "Dubai Mall/Burj Khalifa",
        distance: "1.8 km",
        car: "6 min.",
        metro: "12 min.",
        walking: "12 min.",
      },
      {
        name: "Expo City",
        distance: "32.2 km",
        car: "26 min.",
        metro: "1 hr 24 min.",
        walking: "7 hr 32 min.",
      },
      {
        name: "Dubai Marina",
        distance: "20.1 km",
        car: "18 min.",
        metro: "55 min.",
        walking: "4 hr 26 min.",
      },
    ],
    aroundTheBlockDesc: (
      <div className="specificNeighbourPara">
        <p>
          As one of the world’s top financial centers, DIFC is the leading
          financial hub in the Middle East, Africa, and South Asia (MEASA)
          region. More than 1,000 companies are registered in the DIFC Free
          Zone, with more than 30% being so-called Fintech companies.
        </p>
        <p>
          The district is governed by a common-law framework distinct from the
          United Arab Emirates (UAE) legal system, with laws and regulations
          issued in English. DIFC offers clients a 50-year guarantee of zero
          taxes on corporate income and profits, complemented by the UAE's
          network of double taxation treaties.
        </p>
      </div>
    ),
    aroundTheBlockImages: [
      {
        imageUrl: `${cdnPath}/mag/difc/atb/1.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/atb/2.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/atb/3.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/atb/4.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/atb/5.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: (
          <div className="specificNeighbourPara">
            <p>
              The buildings are connected through the Gate Avenue, which allows
              residents to walk year-round either inside or on the outdoor
              promenade from the residential towers to their offices in the Gate
              District. Gate Avenue hosts more than 300 shops and dining venues.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/difc/atb/6.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/atb/7.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/atb/8.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/atb/9.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
    ],
    whatToExpectDesc: (
      <div className="specificNeighbourPara">
        <p>
          Iconic architecture and the mix between high-end residential and
          ultra-modern office buildings, paired with excellent infrastructure,
          perfect accessibility, connectivity, and the central location within
          Dubai, make DIFC one of the most sought-after areas across Dubai.
        </p>
        <p>
          An underground road called "the tunnel" is built for all kinds of
          delivery or waste disposal trucks. It connects most buildings and
          ensures that commercial traffic is reduced to an absolute minimum.
        </p>
      </div>
    ),
    whatToExpectImages: [
      {
        imageUrl: `${cdnPath}/mag/difc/wte/1.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/wte/2.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/wte/3.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/wte/4.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/wte/5.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/wte/6.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/wte/7.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
    ],
    theMarketDesc: (
      <div className="specificNeighbourPara">
        <p>
          Occupancy levels in DIFC are always lower than in other areas. You can
          find everything from studios to luxury penthouse suites. Prices start
          around 60k for a studio and climb to 450k for a 5-bed penthouse, but
          you can sometimes also find more expensive large penthouses for above
          600k.
        </p>
        <p>
          Awe-inspiring office towers with their state-of-the-art urban
          architecture and technology, along with multiple sophisticated 5-star
          hotels, complete this amazingly unique district.
        </p>
      </div>
    ),
    theMarketImages: [
      {
        imageUrl: `${cdnPath}/mag/difc/tm/1.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/tm/2.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/tm/3.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/tm/4.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/tm/5.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/tm/6.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/tm/7.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/tm/8.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/tm/9.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
    ],
    thingsToLoveDesc: (
      <div className="specificNeighbourPara">
        <p>
          In DIFC, you can find the highest density of Michelin-starred chefs in
          Dubai. A few of these restaurants rank among the top 50 best
          restaurants in the world.
        </p>
      </div>
    ),
    thingsToLoveImages: [
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/1.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/2.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/3.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/4.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/5.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/6.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/7.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: (
          <div className="specificNeighbourPara">
            <p>
              Beautiful pieces of art can be found throughout the whole district
              and complement the phenomenal architecture and landscaping. Twice
              a year, the art night event takes place in the Gate Village, where
              some of the many acclaimed art galleries in the district use the
              event to launch new exhibits.
            </p>
            <p>
              Thousands of attendees come to enjoy the eclectic and lively mix
              of music performances, art shows, and delicious food in the
              pedestrian-only Gate Village district.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/8.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/9.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/10.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/11.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/12.png`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: (
          <div className="specificNeighbourPara">
            <p>
              A very special place is the sunken garden in the Ritz-Carlton
              Hotel, where due to its specific location you can enjoy sitting
              comfortably outdoors without sweating even in the hottest summer
              nights.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/13.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: (
          <div className="specificNeighbourPara">
            <p>DIFC is truly a place where you can work, live, and play.</p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/14.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/15.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/16.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/17.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: (
          <div className="specificNeighbourPara">
            <p>
              Often you can see the peacocks of DIFC strolling around, looking
              for tourists to capture them for their social media.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/18.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/19.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/difc/ttl/20.png`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      // Add more image objects here
    ],
  },
  Jumeirah_Village_Circle: {
    backgroundImage: `${cdnPath}/mag/jvc/1.jpg`,
    neighbourhood: "Jumeirah Village Circle",
    WelcomeDesc: (
      <div className="specificNeighbourPara">
        <p>
          This circular-shaped neighborhood offers a serene escape from the
          bustling city, surrounded by lush greenery and beautifully landscaped
          gardens. Residents here enjoy a perfect blend of modern living and a
          tranquil suburban ambiance.
        </p>
      </div>
    ),
    expectWhatDesc:
      "A vibrant and family-friendly community nestled in the heart of Dubai.",
    marketDesc:
      "Various quality levels of low and high-rise buildings and townhouses form a mixed residential landscape.",
    loveThingsDesc:
      "The 33 landscaped parks totalling an area of four million square feet are specifically popular for families with children, and residents with pets.",
    map: `${cdnPath}/mag/jvc/map.jpg`,
    neighbours: {
      north: "Al Khail Road/Al Quoz",
      west: "Al Khail Road/Emirates Living",
      south: "Sheikh Mohammed Bin Zayed Road (E311)",
      east: "Umm Suqeim Road/Al Barsha South",
    },
    commutes: [
      {
        name: "Dubai DXB Airport",
        distance: "34 km",
        car: "29 min.",
        metro: "1 hr 35 min.",
        walking: null,
      },
      {
        name: "Dubai DWC Airport",
        distance: "28 km",
        car: "27 min.",
        metro: "2 hr 31 min.",
        walking: null,
      },
      {
        name: "Public Beach",
        distance: "14 km",
        car: "20 min.",
        metro: "1 hr 43 min.",
        walking: "2 hrs 56 min.",
      },
      {
        name: "Dubai Mall/Burj Khalifa",
        distance: "22 km",
        car: "21 min.",
        metro: "1 hr 21 min.",
        walking: null,
      },
      {
        name: "Expo City",
        distance: "20 km",
        car: "16 min.",
        metro: "1 hr 43 min.",
        walking: null,
      },
      {
        name: "Dubai Marina",
        distance: "14 km",
        car: "17 min.",
        metro: "1 hr 24 min.",
        walking: "2 hrs 49 min.",
      },
      {
        name: "Mall of the Emirates",
        distance: "11 km",
        car: "17 min.",
        metro: "41 min.",
        walking: "2 hrs 5 min.",
      },
    ],
    aroundTheBlockDesc: (
      <div className="specificNeighbourPara">
        <p>
          Jumeirah Village Circle is renowned for its harmonious blend of
          residential buildings, townhouses, and villas, offering a diverse and
          inclusive community to suit various preferences and lifestyles. This
          mixed landscape creates a unique and welcoming atmosphere, where
          residents can find their ideal home.
        </p>
        <p>
          Its strategic location ensures effortless connectivity to major
          highways, facilitating quick and convenient access to Dubai's key
          landmarks and business districts. Additionally, the neighborhood is
          enriched with an abundance of parks, recreational areas, and essential
          amenities, making it an ideal place for families and individuals
          seeking a balanced and fulfilling lifestyle in the heart of Dubai.
        </p>
      </div>
    ),
    aroundTheBlockImages: [
      {
        imageUrl: `${cdnPath}/mag/jvc/atb/1.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/atb/3.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/atb/2.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/atb/4.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
    ],
    whatToExpectDesc: (
      <div className="specificNeighbourPara">
        <p>
          Jumeirah Village Circle promises a vibrant and convenient lifestyle,
          surrounded by modern conveniences and a strong community spirit,
          making it a budget friendly sought-after choice for residents seeking
          comfort and well-being in the heart of Dubai.
        </p>
      </div>
    ),
    whatToExpectImages: [
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/1.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/2.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/3.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/4.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: (
          <div className="specificNeighbourPara">
            <p>
              Jumeirah Village Circle (JVC) is a haven of diverse hospitality
              choices, catering to every preference and desire. With a plethora
              of hotels spanning all levels, visitors can find their ideal
              accommodation to suit their tastes and budget.
            </p>
            <p>
              Some parts of JVC offer a vibrant nightlife scene, boasting trendy
              bars, lounges, and entertainment venues, while most other areas
              are peaceful and quiet. Culinary enthusiasts will be delighted by
              the abundance of restaurants representing cuisines from around the
              globe, allowing them to embark on a delightful gastronomic journey
              for all budgets without leaving the neighborhood.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/5.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/6.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/7.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/8.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/9.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/10.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/11.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: (
          <div className="specificNeighbourPara">
            <p>
              With schools, nurseries, and play areas, JVC is an ideal location
              for families, providing a safe and nurturing environment for
              children, while positioned near major highways, residents can
              easily access key areas of Dubai, making commuting a breeze.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/12.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/13.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/wte/14.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
    ],
    theMarketDesc: (
      <div className="specificNeighbourPara">
        <p>
          The property market in Jumeirah Village Circle has been flourishing,
          attracting both homebuyers and investors alike. The community's
          well-designed properties and reasonable prices make it an attractive
          destination for those seeking a slice of luxury without breaking the
          bank.
        </p>
      </div>
    ),
    theMarketImages: [
      {
        imageUrl: `${cdnPath}/mag/jvc/tm/1.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/tm/2.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/tm/3.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/tm/4.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/tm/5.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: (
          <div className="specificNeighbourPara">
            <p>
              Whether you're in search of a spacious family villa, a
              contemporary apartment with state-of-the-art amenities, or a cozy
              townhouse, Jumeirah Village Circle has options to suit every taste
              and budget. The real estate here offers excellent value for money,
              making it a smart choice for first-time buyers and seasoned
              investors.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/tm/6.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/tm/7.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/tm/8.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/tm/9.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
    ],
    thingsToLoveDesc: (
      <div className="specificNeighbourPara">
        <p>
          JVC is renowned for its strong sense of community. You'll find a
          friendly and welcoming atmosphere where neighbors often come together
          for various social events and activities. The community parks and
          recreational areas are perfect for fostering connections among
          residents of all ages.
        </p>
      </div>
    ),
    thingsToLoveImages: [
      {
        imageUrl: `${cdnPath}/mag/jvc/ttl/1.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/ttl/2.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/ttl/3.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/ttl/4.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: (
          <div className="specificNeighbourPara">
            <p>
              Whether you're in search of a spacious family villa, a
              contemporary apartment with state-of-the-art amenities, or a cozy
              townhouse, Jumeirah Village Circle has options to suit every taste
              and budget. The real estate here offers excellent value for money,
              making it a smart choice for first-time buyers and seasoned
              investors.
            </p>
          </div>
        ),
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/ttl/5.jpg`,
        buildingName: "Image 2",
        buildingRefNumber: "REF002",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/ttl/6.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 3,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/ttl/7.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 1,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/ttl/8.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
      {
        imageUrl: `${cdnPath}/mag/jvc/ttl/9.jpg`,
        buildingName: "Image 1",
        buildingRefNumber: "REF001",
        grid: 2,
        text: "",
      },
    ],
  },
};

//
// Specific Neighborhood
//

//become-an-agent constants
export const becomeAgentQuestion = {
  headingIcon: "",
  heading: "Why become a Real Estate Agent in Dubai?",
  stepHeading: "",
  colorVariant: "light",
  bodyContent: [
    {
      type: "paragraph",
      paragraphContent: [
        "Dubai's ultramodern skyscrapers, amazing engineering marvels, vibrant hospitality and nightlife and the unparalleled quality of life is attracting people from all over the world, and many are keen to become a part of the real estate industry.",
        "Either you are already successfully working in any other country or city or you want to start your career find all the information you need to join this amazing industry.",
      ],
    },
  ],
};

export const becomeAnAgentStepsSectionData = [
  {
    headingIcon: "skillSet",
    heading: "Assess your skill set",
    stepHeading: "Step 1",
    colorVariant: "dark",
    bodyContent: [
      {
        type: "paragraph",
        paragraphContent: [
          "If you possess all or most of the following skills your success is inevitable",
        ],
      },
      {
        type: "bullet",
        columns: 2,
        bulletHeading: "",
        bulletContent: [
          {
            pointHeading: "Steely Determination",
            pointParagraph: [],
          },
          {
            pointHeading: "Attention to Details",
            pointParagraph: [],
          },
          {
            pointHeading: "The Ability to Negotiate",
            pointParagraph: [],
          },
          {
            pointHeading: "Problem Solving Mindset",
            pointParagraph: [],
          },
          {
            pointHeading: "Tech Savviness",
            pointParagraph: [],
          },
          {
            pointHeading: "Strong Self Motivation",
            pointParagraph: [],
          },
          {
            pointHeading: "A Winning Personality",
            pointParagraph: [],
          },
          {
            pointHeading: "Dedication to Professional Appearance",
            pointParagraph: [],
          },
          {
            pointHeading: "Integrity",
            pointParagraph: [],
          },
          {
            pointHeading: "Strong Communication Skills",
            pointParagraph: [],
          },
          {
            pointHeading: "Networking Skills",
            pointParagraph: [],
          },
          {
            pointHeading: "Boundless Enthusiasm",
            pointParagraph: [],
          },
        ],
      },
    ],
  },
  {
    headingIcon: "rightCompany",
    heading: "Choose the right company",
    stepHeading: "Step 2",
    colorVariant: "light",
    bodyContent: [
      {
        type: "bullet",
        columns: 2,
        bulletHeadingType: "AlwynNewRoundedRegular20",
        bulletPointType: "",
        bulletHeading:
          "The company you choose must have the following qualities: ",
        bulletContent: [
          {
            pointHeading: "A strong mission and vision",
            pointParagraph: [
              "The company should have a clear sense of purpose and a plan for the future.",
            ],
          },
          {
            pointHeading: "A strong financial foundation",
            pointParagraph: [
              "The company should have a sound financial foundation that will allow it to grow and succeed.",
            ],
          },
          {
            pointHeading: "A strong leadership team",
            pointParagraph: [
              "The company should be led by experienced and competent individuals who share the company's values.",
            ],
          },
          {
            pointHeading: "A strong approach towards technology",
            pointParagraph: [
              "No company that does not integrate and dedicate itself to state-of-the-art technology will be able to survive.",
            ],
          },
          {
            pointHeading: "A strong culture",
            pointParagraph: [
              "The company should have a positive and supportive culture that encourages employee growth and development.",
            ],
          },
          {
            pointHeading: "Continuous learning approach",
            pointParagraph: [
              "Today's pace of change is so rapid that it is necessary that the company offers a continuous learning system.",
            ],
          },
          {
            pointHeading: "A strong product or service",
            pointParagraph: [
              "The company should offer a product or service that is valuable to customers and that can be sustained over time.",
            ],
          },
          {
            pointHeading: "A well-designed office space",
            pointParagraph: [
              "A good first impression is crucial. When clients visit your office, they will form an impression of your company based on the space they see. A modern and well-designed office will show that you are a professional and successful company.",
            ],
          },
        ],
      },
      {
        type: "paragraph",
        paragraphContent: [
          "These are just some of the attributes that you should look for when choosing a company to work for. By carefully considering these factors, you can increase your chances of finding a company that is a good fit for you and your career goals.",
        ],
      },
    ],
  },
  {
    headingIcon: "visaProcess",
    heading: "Visa Process",
    stepHeading: "Step 3",
    colorVariant: "dark",
    bodyContent: [
      {
        type: "paragraph",
        paragraphContent: [
          "Once you have accepted a job offer in the UAE, your employer will start the process of applying for your visa. The first step is to attest your education certificates by the UAE embassy in the country where you obtained your education. This is a necessary step to ensure that your qualifications are recognized by the UAE government.",
          "Once your education certificates are attested, your employer will submit your visa application to the UAE embassy. The application process can be fast but can also take some time, so it is important to start the process as early as possible.",
          "If your visa application is approved, you will need to undergo a medical examination and a biometric scanning. The medical examination will check your health and ensure that you are fit to work in the UAE. The biometric scanning will collect your fingerprints and other biometric data.",
          "Once you have completed the medical examination and biometric scanning, your visa will be issued. You now are ready for the next step.",
        ],
      },
    ],
  },
  {
    headingIcon: "reraCertification",
    heading: "RERA Certification",
    stepHeading: "Step 4",
    colorVariant: "light",
    bodyContent: [
      {
        type: "paragraph",
        paragraphContent: [
          "Once your residency visa is ready, it is time to sign up for training with the Dubai Real Estate Institute (DREI). Your company will enroll you for the four-day course known as Certified Training for Real Estate Brokers. The course aims to give the necessary insight into the city's real estate industry.",
        ],
      },
      {
        type: "bullet",
        columns: 2,
        bulletHeadingType: "AlwynNewRoundedRegular20",
        bulletHeading:
          "This course is approved by the Real Estate Regulatory Agency (RERA), which is the regulatory arm of the Dubai Land Department (DLD). The various modules covered in this course include:",
        bulletContent: [
          {
            pointHeading: "History and Development",
            pointParagraph: [],
          },
          {
            pointHeading: "Code of Ethics",
            pointParagraph: [],
          },
          {
            pointHeading: "The Business of a Broker",
            pointParagraph: [],
          },
          {
            pointHeading: "Introduction to Owner's Associations",
            pointParagraph: [],
          },
          {
            pointHeading: "Concepts, Definitions, and Market Players",
            pointParagraph: [],
          },
          {
            pointHeading: "Legal Module",
            pointParagraph: [],
          },
          {
            pointHeading: "Sales Processes and Agreements",
            pointParagraph: [],
          },
          {
            pointHeading: "Essential Skills",
            pointParagraph: [],
          },
          {
            pointHeading: "Leasing Process and Rental Agreements",
            pointParagraph: [],
          },
        ],
      },
      {
        type: "paragraph",
        paragraphContent: [
          "The current course fee is AED 3,400 and has to be paid before taking the course to the institute.",
          "Unfortunately you can not get all the necessary knowledge in just four days. This is the reason why the education level of Dubai's real estate brokers is generally very low. Additional education is required and should be provided by your company. To fill this gap you can enroll with AREICO Institute which offers a comprehensive curriculum for you to gain all the necessary knowledge for a successful career in real estate in Dubai.",
        ],
      },
    ],
  },
  {
    headingIcon: "exam",
    heading: "The Exam",
    stepHeading: "Step 5",
    colorVariant: "dark",
    bodyContent: [
      {
        type: "paragraph",
        paragraphContent: [
          "Once you have completed the RERA course, you will be eligible to take the RERA exam. The exam is now offered online, and it consists of multiple-choice questions. The exam covers a wide range of topics, including real estate laws and regulations, market analysis and valuation, negotiation skills, marketing and sales, and customer service.",
          "The exam is not difficult, so it's not hard to pass. If you have studied your learning materials and you read the questions thoroughly, you should be able to pass the exam.",
        ],
      },
      {
        type: "bullet",
        columns: 1,
        bulletHeadingType: "AlwynNewRoundedRegular20",
        bulletHeading: "Here are some tips for passing the RERA exam:",
        bulletContent: [
          {
            pointHeading: "Study your learning materials thoroughly",
            pointParagraph: [
              "The RERA course covers a lot of material, so it is important to make sure that you understand it all.",
            ],
          },
          {
            pointHeading: "Practice answering multiple-choice questions",
            pointParagraph: [
              "The RERA exam is a multiple-choice exam, so it is important to practice answering multiple-choice questions. There are many online resources that can help you with this.",
            ],
          },
          {
            pointHeading: "Read the questions carefully",
            pointParagraph: [
              "Some of the exam questions can be tricky, so it is important to read the questions carefully. Make sure that you understand what the question is asking before you answer it.",
            ],
          },
          {
            pointHeading: "Manage your time wisely",
            pointParagraph: [
              "The RERA exam is a timed exam, so it is important to manage your time wisely. Don't spend too much time on any one question.",
            ],
          },
        ],
      },
    ],
  },
  {
    headingIcon: "realEstateLicense",
    heading: "Get your license",
    stepHeading: "Step 6",
    colorVariant: "light",
    bodyContent: [
      {
        type: "paragraph",
        paragraphContent: {
          p1: "Once you have passed the RERA exam, you will be eligible to obtain a realtor license to work as a real estate agent in Dubai. However, there is an additional requirement that you need to meet, which is to obtain a certificate of good conduct.",
          p2: "The Economic Department will issue you your realtor license and a the broker card once you have met all the requirements. You will receive your credentials within 1-2 days after your company submitted all the necessary documents.",
          p3: (
            <>
              <strong>Side note: </strong>The Economic Department will issue you
              your realtor license and a the broker card once you have met all
              the requirements. You will receive your credentials within 1-2
              days after your company submitted all the necessary documents.
            </>
          ),
        },
      },
    ],
  },
  {
    headingIcon: "startCareer",
    heading: "Start your career",
    stepHeading: "Step 7",
    colorVariant: "dark",
    bodyContent: [
      {
        type: "paragraph",
        paragraphContent: [
          "Choose a very successful broker in your company to your mentor. The first year working as a real estate broker is the hardest. But with hard work, commitment and persistence your success will be inevitable.",
          "Choosing a successful broker in your company to be your mentor can be a great way to learn the ropes and get started on the right foot in your real estate career.",
        ],
      },
      {
        type: "bullet",
        columns: 1,
        bulletHeadingType: "AlwynNewRoundedRegular20",
        bulletHeading:
          "Here are some things to look for when choosing a mentor:",
        bulletContent: [
          {
            pointHeading: "Someone who has a proven track record of success.",
            pointParagraph: [
              "You want to choose someone who has a good understanding of the real estate market and who has been able to achieve success in their career.",
            ],
          },
          {
            pointHeading:
              "Someone who is willing to share their knowledge and experience with you",
            pointParagraph: [
              "You want to choose someone who is willing to teach you what they know and who is invested in your success.",
            ],
          },
          {
            pointHeading:
              "Someone who is a good fit for your personality and work style",
            pointParagraph: [
              "You want to choose someone who you can relate to and who you feel comfortable working with.",
            ],
          },
        ],
      },
      {
        type: "paragraph",
        paragraphContent: [
          "Once you have found a few potential mentors, it is a good idea to meet with them and see if there is a good fit. Ask them about their experience, their philosophy on real estate, and what they can offer you as a mentor. The first year working as a real estate broker can be challenging, but it is also an exciting time. With hard work, commitment, and persistence, you can achieve your goals and become a successful real estate broker.",
          "Here are some additional tips for your first year as a real estate broker:",
        ],
      },
      {
        type: "bullet",
        columns: 1,
        bulletHeadingType: "AlwynNewRoundedRegular20",
        bulletContent: [
          {
            pointHeading: "Get involved in your local real estate community",
            pointParagraph: [
              "Attend industry events, network with other brokers, and get to know the local market.",
            ],
          },
          {
            pointHeading: "Become specialized in an area",
            pointParagraph: [
              "Don't try to work all over Dubai. Find an area which suits your skills as your farming ground. Become the area specialist and set the goal to dominate your area.",
            ],
          },
          {
            pointHeading: "Set realistic goals for yourself",
            pointParagraph: [
              "Don't expect to be a top producer overnight. Set realistic goals for yourself and focus on achieving them one step at a time.",
            ],
          },
          {
            pointHeading: "Be patient and persistent",
            pointParagraph: [
              "It takes time to build a successful real estate business. Be patient and persistent, and you will eventually achieve your goals.",
            ],
          },
        ],
      },
    ],
  },
];

export const buildingClassificationData = {
  sectionOne: {
    sectionHeading: "The NEWTON Building Classification System (NCS)",
    bodyContent: [
      {
        type: "paragraph",
        paragraphContent: [
          "Building classifications usually categorize office buildings only. Unfortunately, there are no international standards established. There are 4 categories used for a distinction of commercial buildings: Class A to Class D. ",
          "A building’s classification is relative to other buildings in any given market. Such a classification system does not exist for the residential property market.",
          "To help the various actors in Dubai’s residential real estate market such as buyers, tenants, valuators and agents NEWTON Analytics has developed a classification system for residential buildings.",
        ],
      },
    ],
  },
  sectionTwo: {
    sectionHeading: "Building Classes",
    bodyContent: [
      {
        type: "paragraph",
        paragraphContent: [
          "Our building class definitions categorize buildings in Class A, Class B and Class C, each class is subdivided into sub-categories such as AAA, AA and A as an example. ",
        ],
      },
      {
        type: "table",
        tableHeadingType: "AlwynNewRoundedRegular20Bold",
        tableRowType: "AlwynNewRoundedRegular20",
        tableClass: "",
        tableContent: [
          { tableHeading: "Prime Segment", tableRows: ["AAA", "AA", "A"] },
          { tableHeading: "Mid Segment", tableRows: ["BBB", "BB", "B"] },
          { tableHeading: "Mid Segment", tableRows: ["CCC", "CC", "C"] },
          { tableHeading: "Bottom Segment", tableRows: ["D"] },
        ],
      },
      {
        type: "paragraph",
        paragraphContent: [
          "A + or - added to the classification can specify that a building is remarkably close to a higher or lower class. ",
        ],
      },
    ],
  },
  sectionTwoPart2: {
    bodyContent: [
      {
        type: "cardGrid",
        cardGridCols: 2,
        cardHeadingType: "GothamBlack25",
        cardBodyType: "AlwynNewRoundedRegular20",
        cardClass: "buildingClassCardWhite",
        justifyContent: "center",
        alignItems: "center",
        gridSize: 11,
        cardContentArray: [
          {
            cardHeading: "Class A",
            cardBody:
              "Most prestigious buildings competing for premier tenants with rents above average for the area. Buildings have high quality standard finishes, state of the art systems, exceptional accessibility and a definite market presence.",
          },
          {
            cardHeading: "Class B ",
            cardBody:
              "Buildings competing for a wide range of users with rents in the average range for the area. Building finishes are fair to good for the area and systems are adequate, but the building does not compete with Class A at the same price.",
          },
          {
            cardHeading: "Class C",
            cardBody:
              "Buildings competing for tenants requiring functional space at rents below the average for the area.",
          },
          {
            cardHeading: "Class D",
            cardBody:
              "Buildings lowest grade mostly in less desirable areas. All curtain walls, mechanical, electrical and safety systems are dated. These buildings are targeted either for demolition or re-development.",
          },
        ],
      },
    ],
  },
  sectionThree: {
    sectionHeading: "The classification method",
    bodyContent: [
      {
        type: "paragraph",
        paragraphContent: [
          "We have developed a grid with 12 criteria which are rated in 5 levels with a weighted point system.",
        ],
      },
      {
        type: "bullet",
        columns: 3,
        bulletHeadingType: "AlwynNewRoundedRegular20Bold",
        bulletPointType: "AlwynNewRoundedRegular20",
        bulletHeading: "The criteria are: ",
        bulletContent: [
          {
            pointHeading: "Building age and level of maintenance",
          },
          {
            pointHeading: "Leasing rates",
          },
          {
            pointHeading: "Security",
          },
          {
            pointHeading: "Location and access",
          },
          {
            pointHeading: "Tenant structure",
          },
          {
            pointHeading: "Environmental",
          },
          {
            pointHeading: "Construction and architecture",
          },
          {
            pointHeading: "Building systems",
          },
          {
            pointHeading: "Elevators",
          },
          {
            pointHeading: "Property management",
          },
          {
            pointHeading: "Amenities and services",
          },
          {
            pointHeading: "Parking",
          },
        ],
      },
      {
        type: "heading",
        headingContent: "Scoring",
        headingTypoVariant: "GothamBlack25",
      },

      {
        type: "paragraph",
        paragraphContent: [
          "The maximum score given to building is 1300 while the minimum is 210.",
        ],
      },
      {
        type: "tableContentArray",
        tableHeadingType: "AlwynNewRoundedRegular20Bold",
        tableRowType: "AlwynNewRoundedRegular20",
        tableClass: "buildingClassificationBlackScoringTable",
        justifyContent: "flex-start",
        alignItems: "center",
        tableContentArray: [
          [
            { tableHeading: "", tableRows: ["AAA", "AA", "A"] },
            {
              tableHeading: "",
              tableRows: ["1200-1300", "1100-1190", "1000-1090"],
            },
          ],
          [
            { tableHeading: "", tableRows: ["BBB", "BB", "B"] },
            { tableHeading: "", tableRows: ["900-990", "800-890", "700-790"] },
          ],
          [
            { tableHeading: "", tableRows: ["CCC", "CC", "C"] },
            { tableHeading: "", tableRows: ["600-690", "500-590", "400-490"] },
          ],
          [
            { tableHeading: "", tableRows: ["D"] },
            { tableHeading: "", tableRows: ["< 400"] },
          ],
        ],
      },
    ],
  },
  sectionFour: {
    sectionHeading: "Example",
    bodyContent: [
      // {
      //   cardsNotCenteredAndStretch:true
      // },
      {
        type: "paragraph",
        paragraphContent: [
          "To exemplify our method we have shown one example with the detailed levels and the scoring.",
        ],
      },
      {
        type: "heading",
        headingContent: "Building age and level of maintenance",
      },
      {
        type: "tableContentArray",
        tableHeadingType: "AlwynNewRoundedRegular20Bold",
        tableClass: "buildingClassificationWhiteExampleTable",
        tableRowType: "AlwynNewRoundedRegular20",
        justifyContent: "flex-start",
        alignItems: "center",
        tableContentArray: [
          [
            {
              tableHeading: "Level 1",
              tableRows: [
                "Recent built projects with most advanced standards younger than 10 years",
              ],
              bottomData: ["100"],
            },
          ],
          [
            {
              tableHeading: "Level 2",
              tableRows: [
                "Very well maintained older buildings with advanced standards not older than 20 years",
              ],
              bottomData: ["80"],
            },
          ],
          [
            {
              tableHeading: "Level 3",
              tableRows: [
                "Buildings renovated on a continuous basis with up to date security and comfort standards",
              ],

              bottomData: ["70"],
            },
          ],
          [
            {
              tableHeading: "Level 4",
              tableRows: [
                "Recent built projects with minimal required standards and well maintained older buildings",
              ],
              bottomData: ["60"],
            },
          ],
          [
            {
              tableHeading: "Level 5",
              tableRows: [
                "Older buildings with minimal standards and minimal maintenance",
              ],

              bottomData: ["40"],
            },
          ],
          [
            {
              tableHeading: "Level 6",
              tableRows: [
                "Very old buildings with lowest standards and high renovation backlog",
              ],
              bottomData: ["10"],
            },
          ],
        ],
      },
    ],
  },
};
