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
            description: 'Configure which Google capabilities you want.',
        });
        page.add(group);

        // Create a new preferences row
        const rowGemini = new Adw.SwitchRow({
            title: 'Show Gemini',
            subtitle: 'Show Ask Gemini Icon on the search screen',
        });
        // Update this to pass it
        group.add(rowGemini);

        const rowSearch = new Adw.SwitchRow({
            title: 'Show Search',
            subtitle: 'Show Search Google Icon on the search screen',
        });
        group.add(rowSearch);

        const rowYouTube = new Adw.SwitchRow({
            title: 'Show YouTube',
            subtitle: 'Show YouTube Icon on the search screen',
        });
        group.add(rowYouTube);

        const rowMaps = new Adw.SwitchRow({
            title: 'Show Maps',
            subtitle: 'Show Maps Icon on the search screen',
        });
        group.add(rowMaps);

        const rowNews = new Adw.SwitchRow({
            title: 'Show News',
            subtitle: 'Show News Icon on the search screen',
        });
        group.add(rowNews);

        const infoBox = new Adw.PreferencesGroup({
            title: 'Usage Notes',
            description: 'When searching you get the option to:' +
              '\n- Open a link in this format eg. www.google.com' +
              '\n- Ask Gemini eg. Why is fuel so expensive?' +
              '\n- Search Maps eg. Directions to closest fuel station' +
              '\n ' +
              '\n Hint: After enabling this, disable and re-enable search'+
              '\n providers in Gnome settings to move this one to the top.',

        });
        page.add(infoBox);

        // Pass the settings to the window
        window._settings = this.getSettings();
        window._settings.bind('show-gemini', rowGemini, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-search', rowSearch, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-maps', rowMaps, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-news', rowNews, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-youtube', rowYouTube, 'active',
            Gio.SettingsBindFlags.DEFAULT);
    }
}
