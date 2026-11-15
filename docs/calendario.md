# Calendario de disponibilidad (Google Calendar)

La página **Reservar** muestra los días ocupados de cada cabaña. Los saca de **dos calendarios de Google**, uno por cabaña. Tú marcas las reservas en Google Calendar (desde el celular o el computador) y la página se actualiza sola.

La página solo lee las **fechas** de cada reserva, nunca el nombre ni los detalles del evento.

---

## Paso 1: crear los dos calendarios (una sola vez)

En el computador, entra a <https://calendar.google.com> con la cuenta que quieras usar para las cabañas.

1. A la izquierda, junto a **"Otros calendarios"**, toca **+** → **"Crear calendario"**.
2. Nombre: `Alto Captren · Cabaña 1` → **Crear calendario**.
3. Repite para `Alto Captren · Cabaña 2`.

## Paso 2: hacerlos públicos solo con "ocupado/libre"

Para **cada** calendario:

1. Pasa el mouse sobre el calendario → **⋮** → **"Configuración y uso compartido"**.
2. En **"Permisos de acceso a eventos"** marca **"Poner a disposición del público"**.
3. En el menú de al lado elige **"Ver solo disponible/ocupado (ocultar detalles)"**.
4. Más abajo, en **"Integrar el calendario"**, copia el **"ID del calendario"**. Se ve así: `abc123...@group.calendar.google.com`.

Guarda los dos ID. No son secretos: cualquiera que los tenga solo ve ocupado/libre.

## Paso 3: crear la clave de Google (una sola vez)

1. Entra a <https://console.cloud.google.com/> con la misma cuenta.
2. Arriba, **"Seleccionar un proyecto"** → **"Proyecto nuevo"** → nombre `alto-captren` → **Crear**.
3. Menú ☰ → **"APIs y servicios"** → **"Biblioteca"** → busca **Google Calendar API** → **Habilitar**.
4. Menú ☰ → **"APIs y servicios"** → **"Credenciales"** → **"+ Crear credenciales"** → **"Clave de API"**.
5. Toca **"Editar clave de API"** y limítala, para que solo funcione desde tu sitio:
   - **Restricciones de aplicaciones** → **"Sitios web"** → agrega:
     - `https://mykeplos.github.io/*`
     - `http://localhost:4321/*`
     - (cuando tengas dominio) `https://altocaptren.cl/*`
   - **Restricciones de API** → **"Restringir clave"** → marca solo **Google Calendar API**.
   - **Guardar**.
6. Copia la clave. **No la pegues en el chat.**

## Paso 4: guardar los datos en GitHub

En tu terminal (PowerShell), dentro de `C:\Proyectos\alto-captren`:

```
gh secret set GOOGLE_API_KEY
```

Te pide la clave sin mostrarla. Pégala y aprieta Enter.

```
gh variable set CAL_CABANA_1 --body "ID-DEL-CALENDARIO-DE-LA-CABAÑA-1"
gh variable set CAL_CABANA_2 --body "ID-DEL-CALENDARIO-DE-LA-CABAÑA-2"
```

Después, en GitHub → pestaña **Actions** → **Publicar** → **Run workflow**, para publicar de nuevo con el calendario conectado.

## Paso 5 (opcional): verlo en tu PC

Copia `.env.example` como `.env` y completa los tres valores. El archivo `.env` **no se sube a GitHub**. Si no lo creas, en tu PC verás días ocupados de ejemplo.

---

## Cómo marcar una reserva

- **Forma recomendada:** en el calendario de esa cabaña, crea un evento **con horario**, desde las **15:00 del día de llegada** hasta las **12:00 del día de salida**.
  - Ejemplo: llegan el viernes 10 y se van el domingo 12 → evento del viernes 10 a las 15:00 al domingo 12 a las 12:00. Quedan ocupadas las noches del 10 y del 11, y el 12 queda libre para que llegue otra persona.
- **Otra forma:** un evento de **día completo** desde el día de llegada hasta **el día anterior a la salida** (en el ejemplo, del 10 al 11). En Google, un evento de día completo "del 10 al 12" también ocupa la noche del 12.
- El título puede ser el nombre del cliente: la página no lo muestra.
- Si quieres bloquear días (mantención, uso propio), crea un evento igual.
- La página toma los cambios apenas alguien la abre o la recarga.
