import { d as derived, w as writable } from "./index.js";
import "panzoom";
import { p as page } from "./stores.js";
import { d as db } from "./db.js";
import { liveQuery } from "dexie";
const defaultSettings$1 = {
  defaultFullscreen: false,
  displayOCR: true,
  textEditable: false,
  textBoxBorders: false,
  boldFont: false,
  pageNum: true,
  charCount: false,
  mobile: false,
  bounds: false,
  backgroundColor: "#030712",
  swipeThreshold: 50,
  edgeButtonWidth: 40,
  showTimer: false,
  quickActions: true,
  fontSize: "auto",
  zoomDefault: "zoomFitToScreen",
  invertColors: false,
  volumeDefaults: {
    singlePageView: false,
    rightToLeft: true,
    hasCover: false
  },
  ankiConnectSettings: {
    enabled: false,
    cropImage: false,
    grabSentence: false,
    overwriteImage: true,
    pictureField: "Picture",
    sentenceField: "Sentence",
    triggerMethod: "both"
  }
};
const defaultProfiles = {
  Default: defaultSettings$1
};
const initialProfiles = defaultProfiles;
const profiles = writable(initialProfiles);
const storedCurrentProfile = "Default";
const currentProfile = writable(storedCurrentProfile);
profiles.subscribe((profiles2) => {
});
currentProfile.subscribe((currentProfile2) => {
});
const settings = derived([profiles, currentProfile], ([profiles2, currentProfile2]) => {
  return profiles2[currentProfile2];
});
const catalog = liveQuery(() => db.catalog.toArray());
function sortManga(a, b) {
  if (a.volumeName < b.volumeName) {
    return -1;
  }
  if (a.volumeName > b.volumeName) {
    return 1;
  }
  return 0;
}
const manga = derived([page, catalog], ([$page, $catalog]) => {
  if ($page && $catalog) {
    return $catalog.find((item) => item.id === $page.params.manga)?.manga.sort(sortManga);
  }
});
const volume = derived([page, manga], ([$page, $manga]) => {
  if ($page && $manga) {
    return $manga.find((item) => item.mokuroData.volume_uuid === $page.params.volume);
  }
});
const initial = {};
const volumes = writable(initial);
volumes.subscribe((volumes2) => {
});
const progress = derived(volumes, ($volumes) => {
  const progress2 = {};
  if ($volumes) {
    Object.keys($volumes).forEach((key) => {
      progress2[key] = $volumes[key].progress;
    });
  }
  return progress2;
});
const volumeSettings = derived(volumes, ($volumes) => {
  const settings2 = {};
  if ($volumes) {
    Object.keys($volumes).forEach((key) => {
      settings2[key] = $volumes[key].settings;
    });
  }
  return settings2;
});
const totalStats = derived([volumes, page], ([$volumes, $page]) => {
  if ($page && $volumes) {
    return Object.values($volumes).reduce((stats, { chars, completed, timeReadInMinutes, progress: progress2 }) => {
      if (completed) {
        stats.completed++;
      }
      stats.pagesRead += progress2;
      stats.minutesRead += timeReadInMinutes;
      stats.charsRead += chars;
      return stats;
    }, {
      charsRead: 0,
      completed: 0,
      pagesRead: 0,
      minutesRead: 0
    });
  }
});
const mangaStats = derived([manga, volumes], ([$manga, $volumes]) => {
  if ($manga && $volumes) {
    return $manga.map((vol) => vol.mokuroData.volume_uuid).reduce(
      (stats, volumeId) => {
        const timeReadInMinutes = $volumes[volumeId]?.timeReadInMinutes || 0;
        const chars = $volumes[volumeId]?.chars || 0;
        const completed = $volumes[volumeId]?.completed || 0;
        stats.timeReadInMinutes = stats.timeReadInMinutes + timeReadInMinutes;
        stats.chars = stats.chars + chars;
        stats.completed = stats.completed + completed;
        return stats;
      },
      { timeReadInMinutes: 0, chars: 0, completed: 0 }
    );
  }
});
const volumeStats = derived([volume, volumes], ([$volume, $volumes]) => {
  if ($volume && $volumes) {
    const { chars, completed, timeReadInMinutes, progress: progress2 } = $volumes[$volume.mokuroData.volume_uuid];
    return { chars, completed, timeReadInMinutes, progress: progress2 };
  }
});
const defaultSettings = {
  galleryLayout: "grid",
  gallerySorting: "ASC"
};
const miscSettings = writable(defaultSettings);
miscSettings.subscribe((miscSettings2) => {
});
export {
  mangaStats as a,
  volumes as b,
  catalog as c,
  volumeSettings as d,
  profiles as e,
  currentProfile as f,
  miscSettings as m,
  progress as p,
  settings as s,
  totalStats as t,
  volumeStats as v
};
