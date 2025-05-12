/**
 * @file filemoji.js
 * @description
 * Filemoji is a lightweight, zero-dependency JavaScript library that scans anchor
 * (`<a>`) elements on the page and prepends an emoji based on the file type of the
 * href target.
 *
 * @version 1.0.0
 * @author
 * Dan Ruscoe <danruscoe@protonmail.com>
 * @license MIT
 * @repository https://github.com/ruscoe/filemoji.git
 */

/**
 * Global Filemoji object.
 */
window.Filemoji = {
    /**
     * Initializes Filemoji and processes all matching file links on the page.
     */
    init() {
        // Map file extensions to emoji.
        const iconMap = {
            zip: '\u{1F5DC}',  // 🗜️
            rar: '\u{1F5DC}',  // 🗜️
            tar: '\u{1F5DC}',  // 🗜️
            gz: '\u{1F5DC}',   // 🗜️
            bz2: '\u{1F5DC}',  // 🗜️
            pdf: '\u{1F4F0}',  // 📰
            doc: '\u{1F4DD}',  // 📝
            docx: '\u{1F4DD}', // 📝
            xls: '\u{1F4C8}',  // 📈
            xlsx: '\u{1F4C8}', // 📈
            ppt: '\u{1F4CA}',  // 📊
            pptx: '\u{1F4CA}', // 📊
            odt: '\u{1F4C4}',  // 📄
            txt: '\u{1F4C4}',  // 📄
            rtf: '\u{1F4C4}',  // 📄
            xml: '\u{1F4C4}',  // 📄
            csv: '\u{1F4CA}',  // 📄
            jpg: '\u{1F5BC}',  // 🖼️
            jpeg: '\u{1F5BC}', // 🖼️
            png: '\u{1F5BC}',  // 🖼️
            gif: '\u{1F5BC}',  // 🖼️
            bmp: '\u{1F5BC}',  // 🖼️
            svg: '\u{1F5BC}',  // 🖼️
            webp: '\u{1F5BC}', // 🖼️
            ico: '\u{1F5BC}',  // 🖼️
            mp3: '\u{1F3B5}',  // 🎵
            wav: '\u{1F3B5}',  // 🎵
            ogg: '\u{1F3B5}',  // 🎵
            m4a: '\u{1F3B5}',  // 🎵
            flac: '\u{1F3B5}', // 🎵
            mp4: '\u{1F4FD}',  // 📽️
            mov: '\u{1F4FD}',  // 📽️
            avi: '\u{1F4FD}',  // 📽️
            mkv: '\u{1F4FD}',  // 📽
            webm: '\u{1F4FD}', // 📽️
            exe: '\u{1F4BE}'   // 💾
        };

        // Process each <a> element.
        document.querySelectorAll('a[href]').forEach((link) => {
            const href = link.getAttribute('href');
            const extMatch = href.match(/\.([a-z0-9]+)([\?#].*)?$/i);

            if (!extMatch) return;

            const ext = extMatch[1].toLowerCase();
            const icon = iconMap[ext];

            if (!icon) return;

            // Avoid processing twice.
            if (!link.classList.contains('filemoji-processed')) {
                // Prepend the emoji to the link text.
                const iconSpan = document.createElement('span');
                iconSpan.textContent = `${icon} `;
                iconSpan.setAttribute('aria-hidden', 'true');
                link.prepend(iconSpan);
                link.classList.add('filemoji-processed');
            }
        });
    }
};
