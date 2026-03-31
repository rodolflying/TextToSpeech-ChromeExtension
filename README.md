# AutoRead Pro 🎧✨

AutoRead Pro es una extensión de navegador moderna y avanzada de Text-to-Speech (TTS) diseñada para leer cualquier texto seleccionado en la web con una fluidez y naturalidad superior. A diferencia de los lectores tradicionales robóticos, AutoRead Pro utiliza técnicas modernas de procesamiento de texto para mantener la prosodia, las pausas respiratorias naturales y la entonación.

## Características Principales 🚀
- **Prosodia Natural:** Procesa el texto por párrafos (en lugar de partir por cada punto o coma), permitiendo que la inteligencia artificial de las voces del sistema conserve la entonación y fluidez humana.
- **Detección Automática de Idiomas:** Analiza el texto seleccionado en tiempo real y asigna automáticamente la voz nativa correcta al idioma detectado.
- **Limpieza Inteligente de Texto:** Omite la lectura literal de correos o URLs largas (`https://...`) y transforma los puntos de listas (`-`, `•`) en ligeras pausas para una escucha agradable.
- **Control de Velocidad Extendido:** Control deslizante fluido para ajustar la velocidad de lectura desde **0.5x hasta 3.0x**.
- **Memoria de Preferencias:** Guarda automáticamente tu voz preferida y velocidad elegida localmente en el almacenamiento del navegador para tu próxima sesión.
- **Interfaz Premium Dark Mode:** Panel moderno, atractivo y limpio.

---

## 🛠️ Instrucciones de Instalación (Modo Desarrollador)

Dado que esta extensión se instala a partir de su código fuente (descomprimida), los pasos varían ligeramente dependiendo de tu navegador basado en Chromium.

### En Google Chrome
1. Abre tu navegador y escribe `chrome://extensions/` en la barra de direcciones.
2. En la esquina superior derecha, activa el interruptor que dice **"Modo de desarrollador"** (Developer mode).
3. Haz clic en el botón **"Cargar descomprimida"** (Load unpacked) que aparecerá en la parte superior izquierda.
4. Selecciona la carpeta `AutoRead` (esta misma carpeta donde descargaste los archivos).
5. ¡Listo! Te recomiendo hacer clic en el ícono de rompecabezas 🧩 arriba a la derecha para "Fijar" (Pin) AutoRead Pro en tu barra.

### En Microsoft Edge
1. Abre tu navegador y escribe `edge://extensions/` en la barra de direcciones.
2. En el panel izquierdo inferior, activa el interruptor **"Modo de desarrollador"**.
3. Haz clic en el nuevo botón **"Cargar extensión sin empaquetar"** (Load unpacked) que aparecerá arriba.
4. Navega hasta la carpeta del proyecto y selecciónala.

### En Brave
1. Escribe `brave://extensions/` en tu barra de direcciones.
2. Arriba a la derecha, activa la casilla de **"Developer mode"**.
3. Haz clic en el botón **"Load unpacked"** en la parte superior izquierda.
4. Selecciona la carpeta del proyecto.

---

## 📖 Cómo utilizarla
1. Entra a cualquier sitio web o artículo.
2. Selecciona arrastrando con el ratón el fragmento de texto que deseas escuchar.
3. Haz clic en el ícono de AutoRead Pro en tu barra de extensiones.
4. Ajusta tu voz (puedes dejarlo en "Auto-Detect Language") y tu velocidad preferida.
5. Haz clic en el botón **"▶ Read"**.
6. Puedes detener la lectura en cualquier momento haciendo clic en **"⏹ Stop"**. *(Nota: Si deseas aplicar un cambio drástico de velocidad, detén la lectura, ajusta el slider y vuelve a pulsar Read).*

## Tecnologías Utilizadas
- **HTML5 & Vanilla CSS:** Interfaz estéticamente enriquecida con Google Fonts (Inter).
- **JavaScript (ES6):** Motor de fondo con Workers asíncronos en Manifest V3.
- **Chrome APIs:** `chrome.tts`, `chrome.scripting`, `chrome.storage.local`, `chrome.i18n`.
