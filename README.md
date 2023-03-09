# Aprende Storybook
> Este repositorio contiene el código de la aplicación de ejemplo que utilizamos en el taller de Storybook de Make It Real.

<img src="./.workshop/preview.png">

## 💻 Desarrollo

### ¿Qué es este repositorio?

Este repositorio contiene el código de la aplicación de ejemplo que utilizamos en el taller de Storybook de Make It Real. El código de la aplicación de ejemplo se encuentra en la carpeta `src`. La carpeta `.storybook` contiene la configuración de Storybook.

### ¿Cómo ejecutar este proyecto?

1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Ejecuta el proyecto con `npm start`

### ¿Cómo ejecutar Storybook?

1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Ejecuta Storybook con `npm run storybook`

## 📚 Contenido

### ¿Qué es Storybook?

Storybook es una herramienta de desarrollo de interfaz de usuario que permite a los desarrolladores construir componentes de interfaz de usuario de forma aislada. Esto permite a los desarrolladores construir componentes de interfaz de usuario de forma independiente y reutilizable.

### 👨🏼‍🏫 Taller

La idea de este taller es que aprendas a utilizar Storybook para construir componentes de interfaz de usuario de forma aislada y reutilizable. Para esto, utilizaremos los componentes de la aplicación de ejemplo que se encuentra en la carpeta `src` la cual es una lista de tareas.

Tu meta sera construir las historias de Storybook para cada uno de los componentes de la aplicación de ejemplo. Para esto, deberás crear los archivos de historias correspondientes a los componentes en la carpeta `./src/components`.

<img src="./.workshop/storybook_practice.gif">

#### 📝 Tareas

- [ ] Construye la historia de Storybook para el componente `Task`
  - [ ] Crea el archivo `Task.stories.js` en la carpeta `./src/components/`
  - [ ] Importa el componente `Task` en el archivo `Task.stories.js`
  - [ ] Crea la historia `Default` para el componente `Task` -> Muestra el componente `Task` con el título `Test Task` y el estado `TASK_INBOX`
  - [ ] Crea la historia `Pinned` para el componente `Task` -> Muestra el componente `Task` con el título `Test Task` y el estado `TASK_PINNED`
  - [ ] Crea la historia `Archived` para el componente `Task` -> Muestra el componente `Task` con el título `Test Task` y el estado `TASK_ARCHIVED`
  - [ ] Crea la historia `Long Title` para el componente `Task` -> Muestra el componente `Task` con el título `Test Task with a very long title that will take up more space than usual` y el estado `TASK_INBOX`
- [ ] Construye la historia de Storybook para el componente `TaskList`
  - [ ] Crea el archivo `TaskList.stories.js` en la carpeta `./src/components/`
  - [ ] Importa el componente `TaskList` en el archivo `TaskList.stories.js`
  - [ ] Crea la historia `Default` para el componente `TaskList` -> Muestra el componente `TaskList` con la propiedad `tasks` con almenos 6 tareas [{}, {}, {}, {}, {}, {}] todas con el estado `TASK_INBOX`
  - [ ] Crea la historia `With Pinned Tasks` para el componente `TaskList` -> Muestra el componente `TaskList` con almenos 6 tareas [{}, {}, {}, {}, {}, {}] todas con el estado `TASK_INBOX` excepto la primera tarea que debe tener el estado `TASK_PINNED`
  - [ ] Crea la historia `Loading` para el componente `TaskList` -> Muestra el componente `TaskList` con almenos 6 tareas [{}, {}, {}, {}, {}, {}] todas con el estado `TASK_INBOX` y la propiedad `status` con el valor `loading`.
  - [ ] Crea la historia `Empty` para el componente `TaskList` -> Muestra el componente `TaskList` con la propiedad `tasks` con un array vacio `[]`.





