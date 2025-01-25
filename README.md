# Structure

## `/maps`

Similiar copy to [brawlify/maps](https://brawlify.com/maps/)

### Components

**Maps**

- props: `Maps`
- renders: All maps as a list. Each map should be `map` component

**Map**

- props: `imgUrl`, `mapName`
- renders: Single image of map with the name in the top middle.

**Map Details**

- props: `mapName`
- renders: Map details. You should fetch them using our API at endpoint `{API_URL}/maps/{mapName}`

## `/brawlers`

Similar copy to [brawlify.com/brawlers](https://brawlify.com/brawlers/)

### Components

**All brawlers**

- props: `brawlers`
- renders: List of all brawlers. Each should be `brawler` component

**Brawler**

- props: `imgUrl, rarity, name`
- renders: Image of brawler along with it's name

**Brawler Details**

- props: `brawlerName`
- renders: All brawlers data by fetching it from `{API_URL}/brawlers/{brawlerName}`

## `/team-bulder`

Similar copy to [brawltime.ninja/team-builder](https://brawltime.ninja/team-builder)

### Components

**Summary Component**

- props: `textArray` - array of texts. Each will be intended.
- renders: Basic summary

![Screenshot 2024-12-09 at 19 25 07](https://github.com/user-attachments/assets/d240a615-1eab-4aa9-96f0-adcd106bf5bd)

**Map input**

- props: `maps`
- renders: A menu with a button:

![Screenshot 2024-12-09 at 19 32 43](https://github.com/user-attachments/assets/73e96c5e-0018-4bdb-9c46-3ed581b9efe6)

_When button is clicked redirect to `maps/choose`_ <br><br>
**Choose map**

- props: `None`
- render: All maps. Fetches them from `{API_URL}/maps`. Each map will be the same components from the **Maps** page which is called **Map**
  ![Screenshot 2024-12-09 at 19 29 23](https://github.com/user-attachments/assets/9d28c790-410c-4112-8bca-652db3f02e66)

_When map is clicked go back to the previous page_.<br><br>

**Brawler input**

- props: `onSubmit` - function which will handle the submitting of the brawlers.
- renders: A empty `Summary` component which has a button. and a `Brawlers List` component<br>

![Screenshot 2024-12-09 at 19 34 22](https://github.com/user-attachments/assets/a2c13ac0-79cd-471f-a990-99e2bd1b387a)

_When a brawler is clicked add it to the Summary. When confirm button is pressed clear the `Summary` and start the choosing of enemy brawlers which is the same process._
_! enemy and ally teams cannot use the same brawlers._

_The second time the confirm button is pressed render the following components:_<br><br>

**AISuggestion component**

- props: `enemyBrawlers, allyBrawlers, map`
- renders: Suggested brawlers and the cost of the call. You get the data by making a GET request to `{API_URL}/ai/brawl-stars` with the props as query params
