// TouchPad On Off (c) 2024 Romano Giannetti <romano.giannetti@gmail.com>
// License: GPLv2+, see http://www.gnu.org/licenses/gpl-2.0.txt
//
import Gio from 'gi://Gio';
import Adw from 'gi://Adw';

import {ExtensionPreferences} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

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

        const rowMaps = new Adw.SwitchRow({
            title: 'Show Maps',
            subtitle: 'Show Maps Icon on the search screen',
        });
        group.add(rowMaps);
        //
        window._settings = this.getSettings();
        window._settings.bind('show-gemini', rowGemini, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-search', rowSearch, 'active',
            Gio.SettingsBindFlags.DEFAULT);
        window._settings.bind('show-maps', rowMaps, 'active',
            Gio.SettingsBindFlags.DEFAULT);
    }
}
