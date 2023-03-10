# Aprende Storybook
> Este repositorio contiene el c贸digo de la aplicaci贸n de ejemplo que utilizamos en el taller de Storybook de Make It Real.

<img src="./.workshop/preview.png">

## 馃捇 Desarrollo

### 驴Qu茅 es este repositorio?

Este repositorio contiene el c贸digo de la aplicaci贸n de ejemplo que utilizamos en el taller de Storybook de Make It Real. El c贸digo de la aplicaci贸n de ejemplo se encuentra en la carpeta `src`. La carpeta `.storybook` contiene la configuraci贸n de Storybook.

### 驴C贸mo ejecutar este proyecto?

1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Ejecuta el proyecto con `npm start`

### 驴C贸mo ejecutar Storybook?

1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Ejecuta Storybook con `npm run storybook`

## 馃摎 Contenido

### 驴Por qu茅 utilizar Storybook?

#### El problema

En el desarrollo de aplicaciones de interfaz de usuario, los desarrolladores construyen componentes de interfaz de usuario de forma independiente. Estos componentes de interfaz de usuario son reutilizables y pueden ser utilizados en diferentes partes de la aplicaci贸n. Sin embargo, los desarrolladores no tienen una forma de probar estos componentes de interfaz de usuario de forma aislada. Esto significa que los desarrolladores deben construir una aplicaci贸n completa para probar los componentes de interfaz de usuario. Esto puede ser un proceso lento y tedioso. Adem谩s, los desarrolladores no pueden probar los componentes de interfaz de usuario en diferentes estados. Por ejemplo, un componente de interfaz de usuario puede tener diferentes estados como `hover`, `focus`, `disabled`, etc.  Para complicar a煤n m谩s las cosas, esas interfaces de usuario son dif铆ciles de depurar porque est谩n enredadas en la l贸gica comercial, los estados interactivos y el contexto de la aplicaci贸n. La amplitud de las interfaces modernas abruma los flujos de trabajo existentes. Los desarrolladores deben considerar innumerables variaciones de la interfaz de usuario, pero no est谩n equipados para desarrollarlas u organizarlas todas. Terminas en una situaci贸n en la que las interfaces de usuario son m谩s dif铆ciles de construir, menos satisfactorias para trabajar y fr谩giles.

<img src="https://storybook.js.org/0930d02ee2c69e80e8eb796e8be8981c/multiverse.png">

#### La soluci贸n

**Crear interfaces de usuario de forma aislada**
Cada pieza de la interfaz de usuario es ahora un componente. El superpoder de los componentes es que no es necesario activar toda la aplicaci贸n solo para ver c贸mo se procesan. Puede renderizar una variaci贸n espec铆fica de forma aislada pasando props, simulando datos o falsificando eventos.

Storybook est谩 empaquetado como un taller peque帽o, solo de desarrollo, que vive junto con su aplicaci贸n. Proporciona un iframe aislado para representar componentes sin interferencias del contexto y la l贸gica comercial de la aplicaci贸n. Eso lo ayuda a enfocar el desarrollo en cada variaci贸n de un componente, incluso en los casos extremos dif铆ciles de alcanzar.

### 驴Qu茅 es Storybook?

Storybook es una herramienta de desarrollo de interfaz de usuario que permite a los desarrolladores construir componentes de interfaz de usuario de forma aislada. Esto permite a los desarrolladores construir componentes de interfaz de usuario de forma independiente y reutilizable.
### 驴Qu茅 es una historia?

Una historia es un tipo de documento que se utiliza para describir un componente de interfaz de usuario. Una historia describe el estado de un componente de interfaz de usuario en un momento dado. Por ejemplo, una historia puede describir un componente de interfaz de usuario con un t铆tulo, un estado y un conjunto de acciones.

### 馃懆馃徏鈥嶐煆? Taller

La idea de este taller es que aprendas a utilizar Storybook para construir componentes de interfaz de usuario de forma aislada y reutilizable. Para esto, utilizaremos los componentes de la aplicaci贸n de ejemplo que se encuentra en la carpeta `src` la cual es una lista de tareas.

Tu meta sera construir las historias de Storybook para cada uno de los componentes de la aplicaci贸n de ejemplo. Para esto, deber谩s crear los archivos de historias correspondientes a los componentes en la carpeta `./src/components`.

<img src="./.workshop/storybook_practice.gif">

#### 馃摑 Tareas

- [ ] Construye la historia de Storybook para el componente `Task`
  - [ ] Crea el archivo `Task.stories.js` en la carpeta `./src/components/`
  - [ ] Importa el componente `Task` en el archivo `Task.stories.js`
  - [ ] Crea la historia `Default` para el componente `Task` -> Muestra el componente `Task` con el t铆tulo `Test Task` y el estado `TASK_INBOX`
  - [ ] Crea la historia `Pinned` para el componente `Task` -> Muestra el componente `Task` con el t铆tulo `Test Task` y el estado `TASK_PINNED`
  - [ ] Crea la historia `Archived` para el componente `Task` -> Muestra el componente `Task` con el t铆tulo `Test Task` y el estado `TASK_ARCHIVED`
  - [ ] Crea la historia `Long Title` para el componente `Task` -> Muestra el componente `Task` con el t铆tulo `Test Task with a very long title that will take up more space than usual` y el estado `TASK_INBOX`
- [ ] Construye la historia de Storybook para el componente `TaskList`
  - [ ] Crea el archivo `TaskList.stories.js` en la carpeta `./src/components/`
  - [ ] Importa el componente `TaskList` en el archivo `TaskList.stories.js`
  - [ ] Crea la historia `Default` para el componente `TaskList` -> Muestra el componente `TaskList` con la propiedad `tasks` con almenos 6 tareas [{}, {}, {}, {}, {}, {}] todas con el estado `TASK_INBOX`
  - [ ] Crea la historia `With Pinned Tasks` para el componente `TaskList` -> Muestra el componente `TaskList` con almenos 6 tareas [{}, {}, {}, {}, {}, {}] todas con el estado `TASK_INBOX` excepto la primera tarea que debe tener el estado `TASK_PINNED`
  - [ ] Crea la historia `Loading` para el componente `TaskList` -> Muestra el componente `TaskList` con almenos 6 tareas [{}, {}, {}, {}, {}, {}] todas con el estado `TASK_INBOX` y la propiedad `status` con el valor `loading`.
  - [ ] Crea la historia `Empty` para el componente `TaskList` -> Muestra el componente `TaskList` con la propiedad `tasks` con un array vacio `[]`.





