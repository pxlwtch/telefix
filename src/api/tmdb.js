import request from 'superagent';

const BASE_URL = 'https://api.themoviedb.org/3';
const CONFIG_PATH = '/configuration';
const SEARCH_TV_PATH = '/search/tv';
const AK = 'fa3f0c4d7cac08acc1144300e26cbf75';

// result from https://api.themoviedb.org/3/configuration
const configuration = {
  "images": {
    "base_url": "http://image.tmdb.org/t/p/",
    "secure_base_url": "https://image.tmdb.org/t/p/",
    "backdrop_sizes": [
      "w300",
      "w780",
      "w1280",
      "original"
    ],
    "logo_sizes": [
      "w45",
      "w92",
      "w154",
      "w185",
      "w300",
      "w500",
      "original"
    ],
    "poster_sizes": [
      "w92",
      "w154",
      "w185",
      "w342",
      "w500",
      "w780",
      "original"
    ],
    "profile_sizes": [
      "w45",
      "w185",
      "h632",
      "original"
    ],
    "still_sizes": [
      "w92",
      "w185",
      "w300",
      "original"
    ]
  },
  "change_keys": [
    "adult",
    "air_date",
    "also_known_as",
    "alternative_titles",
    "biography",
    "birthday",
    "budget",
    "cast",
    "certifications",
    "character_names",
    "created_by",
    "crew",
    "deathday",
    "episode",
    "episode_number",
    "episode_run_time",
    "freebase_id",
    "freebase_mid",
    "general",
    "genres",
    "guest_stars",
    "homepage",
    "images",
    "imdb_id",
    "languages",
    "name",
    "network",
    "origin_country",
    "original_name",
    "original_title",
    "overview",
    "parts",
    "place_of_birth",
    "plot_keywords",
    "production_code",
    "production_companies",
    "production_countries",
    "releases",
    "revenue",
    "runtime",
    "season",
    "season_number",
    "season_regular",
    "spoken_languages",
    "status",
    "tagline",
    "title",
    "translations",
    "tvdb_id",
    "tvrage_id",
    "type",
    "video",
    "videos"
  ]
};

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function searchAPIWithQuery(query) {
  const q = escapeRegexCharacters(query);
  return new Promise((resolve, reject) => {
    request
    .get(`${BASE_URL}${SEARCH_TV_PATH}?api_key=${AK}&query=${q}`)
    .end((error, result) => {
      if (error) {
        reject(error);
      }
      console.log(result.body);
      resolve(result.body);
    });
  });
}

export function getTitlesFromSearch(result) {
  return new Promise((resolve) => {
    if (!result) resolve([]);
    if (result.total_results) {
      resolve(result.results);
    }
    resolve([]);
  });
}