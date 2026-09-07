import Gio from 'gi://Gio';
import Adw from 'gi://Adw';

import {ExtensionPreferences} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

/**
 * This extension was created using Zed and Inkling and is open source.
 * Some of the code was reused the extension 'Browser Search Provider'
 * Some of the preferences code was reused from 'Toggle touchpad on or off'
 * This code lives on github at 'https://github.com/seventi71/Search-Provider'
 */

export default class SwitchFocusTypePreferences extends ExtensionPreferences {
    fillPreferencesWindow(window) {
        // Create a preferences page, with a single group
        const page = new Adw.PreferencesPage({
            title: 'General',
            icon_name: 'dialog-information-symbolic',
        });
        window.add(page);

        const group = new Adw.PreferencesGroup({
            title: 'Shell Search',
            description: 'The provider will only populate the first 6 options that are enabled.',
        });
        page.add(group);

        // Create a new preferences row
        const rowGemini = new Adw.SwitchRow({
            title: 'Show Gemini',
            subtitle: 'Show Ask Gemini, e.g. How to make a curry?',
        });
        // Update this to pass it
        group.add(rowGemini);

        const rowSearch = new Adw.SwitchRow({
            title: 'Show Search',
            subtitle: 'Show Google Search, e.g. Reddit Best Linux Repo',
        });
        group.add(rowSearch);

        const rowYouTube = new Adw.SwitchRow({
            title: 'Show YouTube',
            subtitle: 'Show Search YouTube, e.g. Focus Music',
        });
        group.add(rowYouTube);

        const rowMaps = new Adw.SwitchRow({
            title: 'Show Maps',
            subtitle: 'Show Search Maps, eg. Directions to "location"',
        });
        group.add(rowMaps);

        const rowNews = new Adw.SwitchRow({
            title: 'Show News',
            subtitle: 'Show Search News, e.g. Local or "topic"',
        });
        group.add(rowNews);

        const rowTranslate = new Adw.SwitchRow({
            title: 'Show Translate',
            subtitle: 'Show Translate, e.g. Hello, there stranger',
        });
        group.add(rowTranslate);

        const rowWeather = new Adw.SwitchRow({
            title: 'Show Weather',
            subtitle: 'Show Weather, e.g. Local or "town"',
        });
      group.add(rowWeather);

        const rowLink = new Adw.SwitchRow({
            title: 'Show Link',
            subtitle: 'Show Open Link, e.g Localhost:8000',
        });
        group.add(rowLink);

        const infoBox = new Adw.PreferencesGroup({
            title: 'Usage Notes',
            description: ' Placement of search provider is at the bottom of ' +
                       '\n the screen by default. To move it to the top, disable' +
                       '\n and re-enable search providers in Gnome search settings.',

        });
        page.add(infoBox);

        // Pass the settings to the window
        window._settings = this.getSettings();
        window._settings.bind('show-link', rowLink, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-gemini', rowGemini, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-search', rowSearch, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-maps', rowMaps, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-news', rowNews, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-translate', rowTranslate, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-youtube', rowYouTube, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-weather', rowWeather, 'active',
            Gio.SettingsBindFlags.DEFAULT);
    }
}
