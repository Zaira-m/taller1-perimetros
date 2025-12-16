# Taller 1 – Cálculo de Perímetros con Ionic y Angular

Aplicación híbrida desarrollada como parte del **Taller 1 de la asignatura Programación Híbrida**, cuyo objetivo es calcular el perímetro de distintas figuras geométricas utilizando **Ionic Framework** y **Angular**.

##  Descripción del proyecto

La aplicación permite al usuario seleccionar una figura geométrica (círculo o triángulo) mediante un componente `ion-select`.  
Según la figura seleccionada, se muestra dinámicamente el componente correspondiente, donde el usuario puede ingresar los datos necesarios y calcular el perímetro presionando un botón.

El proyecto aplica conceptos de **Programación Orientada a Objetos**, implementando una jerarquía de clases basada en un diagrama UML, incluyendo una clase abstracta y clases derivadas para cada figura geométrica.

##  Funcionalidades principales

- Selección dinámica de figura geométrica.
- Cálculo del perímetro de:
  - Círculo
  - Triángulo escaleno
- Uso de componentes Standalone en Angular.
- Renderizado condicional mediante `*ngIf`.
- Formularios para el ingreso de datos.
- Separación entre lógica de negocio y componentes visuales.

## Tecnologías utilizadas

- Ionic Framework
- Angular
- TypeScript
- HTML5
- SCSS

## Estructura general del proyecto

- `src/app/home`: página principal de la aplicación.
- `src/app/circulo`: componente para el cálculo del perímetro del círculo.
- `src/app/triangulo`: componente para el cálculo del perímetro del triángulo.
- `src/app/Modelos`: jerarquía de clases en TypeScript basada en UML.

## Ejecución del proyecto

Para ejecutar el proyecto en entorno local:

```bash
npm install
ionic serve


Autor

Zaira Liz Manríquez Provoste
Estudiante de Técnico en Informática
Asignatura: Programación Híbrida
Instituto Profesional IPLACEX
