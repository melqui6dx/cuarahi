import ExerciseItem from "../components/ExerciseItem";
import { InlineMath } from 'react-katex';

// Función para renderizar texto con expresiones matemáticas en línea
function renderTextWithInlineMath(text) {
    // Busca expresiones entre $...$ y las reemplaza por <InlineMath>
    const parts = text.split(/(\$[^$]+\$)/g);
    return parts.map((part, i) => {
        if (part.startsWith('$') && part.endsWith('$')) {
            return <InlineMath key={i}>{part.slice(1, -1)}</InlineMath>;
        }
        return part;
    });
}

const ExerciseSection = () => {
    // Datos de los ejercicios con la estructura adaptada para KaTeX
    const exercises = [
        {
            id: 'elipse_ej1',
            title: 'Ejercicio 1',
            statement: 'Hallar la ecuación de la elipse cuyos vértices son los puntos $V_1(4,0)$, $V_2(-4,0)$ y cuyos focos son los puntos $F_1(3,0)$, $F_2(-3,0)$.',
            solution: [
                { type: 'subheading', content: 'Identificar el centro (h,k):' },
                { type: 'text', content: 'El centro es el punto medio del segmento que une los vértices (o los focos).' },
                { type: 'block', math: 'h = \\frac{4+(-4)}{2} = 0' },
                { type: 'block', math: 'k = \\frac{0+0}{2} = 0' },
                { type: 'text', content: 'Centro: $C(0,0)$.' },
                { type: 'subheading', content: 'Determinar la orientación:' },
                { type: 'text', content: 'Los vértices y focos están sobre el eje X (la coordenada y es constante e igual a 0). Por lo tanto, la elipse es horizontal.' },
                { type: 'subheading', content: 'Calcular el semieje mayor (a):' },
                { type: 'text', content: 'Es la distancia del centro a un vértice.' },
                { type: 'block', math: 'a = \\text{distancia}(C,V_1) = \\sqrt{(4-0)^2+(0-0)^2} = \\sqrt{4^2} = 4' },
                { type: 'subheading', content: 'Calcular la distancia del centro al foco (c):' },
                { type: 'block', math: 'c = \\text{distancia}(C,F_1) = \\sqrt{(3-0)^2+(0-0)^2} = \\sqrt{3^2} = 3' },
                { type: 'subheading', content: 'Calcular el semieje menor (b):' },
                { type: 'text', content: 'Usamos la relación $a^2=b^2+c^2$.' },
                { type: 'block', math: 'b^2 = a^2-c^2 = 4^2-3^2 = 16-9=7' },
                { type: 'block', math: 'b = \\sqrt{7}' },
                { type: 'subheading', content: 'Escribir la ecuación:' },
                { type: 'text', content: 'Para una elipse horizontal con centro en $(0,0)$:' },
                { type: 'block', math: '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1' },
                { type: 'subheading', content: 'Ecuación de la Elipse:' },
                { type: 'block', math: '\\frac{x^2}{16} + \\frac{y^2}{7} = 1' },
            ],
        },
        {
            id: 'elipse_ej2',
            title: 'Ejercicio 2',
            statement: 'Hallar la ecuación de la elipse cuyos focos son los puntos $F_1(2,0)$, $F_2(-2,0)$ y su excentricidad es $e=\\frac{2}{3}$.',
            solution: [
                { type: 'subheading', content: 'Identificar el centro (h,k):' },
                { type: 'text', content: 'Punto medio de los focos.' },
                { type: 'block', math: 'h = \\frac{2+(-2)}{2} = 0' },
                { type: 'block', math: 'k = \\frac{0+0}{2} = 0' },
                { type: 'text', content: 'Centro: $C(0,0)$.' },
                { type: 'subheading', content: 'Determinar la orientación:' },
                { type: 'text', content: 'Los focos están sobre el eje X. La elipse es horizontal.' },
                { type: 'subheading', content: 'Calcular la distancia del centro al foco (c):' },
                { type: 'block', math: 'c = \\text{distancia}(C,F_1) = \\sqrt{(2-0)^2+(0-0)^2} = 2' },
                { type: 'subheading', content: 'Calcular el semieje mayor (a):' },
                { type: 'text', content: 'Usamos la fórmula de excentricidad $e=\\frac{c}{a}$.' },
                { type: 'block', math: '\\frac{2}{3} = \\frac{2}{a} \\Rightarrow a=3' },
                { type: 'subheading', content: 'Calcular el semieje menor (b):' },
                { type: 'text', content: 'Usamos $a^2=b^2+c^2$.' },
                { type: 'block', math: 'b^2 = a^2-c^2 = 3^2-2^2 = 9-4=5' },
                { type: 'block', math: 'b = \\sqrt{5}' },
                { type: 'subheading', content: 'Escribir la ecuación:' },
                { type: 'subheading', content: 'Ecuación de la Elipse:' },
                { type: 'block', math: '\\frac{x^2}{9} + \\frac{y^2}{5} = 1' },
            ]
        },
        {
            id: 'elipse_ej3',
            title: 'Ejercicio 3',
            statement: 'Los focos de una elipse son los puntos $F_1(3,0)$, $F_2(-3,0)$ y la longitud de cualquiera de sus lados rectos es igual a 9. Hallar la ecuación de la elipse.',
            solution: [
                { type: 'subheading', content: 'Identificar el centro (h,k) y c:' },
                { type: 'text', content: 'Centro $C(0,0)$. $c=3$.' },
                { type: 'subheading', content: 'Determinar la orientación:' },
                { type: 'text', content: 'Elipse horizontal.' },
                { type: 'subheading', content: 'Usar la fórmula del Lado Recto (LR):' },
                { type: 'text', content: '$LR=\\frac{2b^2}{a}$.' },
                { type: 'block', math: '9 = \\frac{2b^2}{a} \\Rightarrow 2b^2=9a \\Rightarrow b^2=\\frac{9a}{2}' },
                { type: 'subheading', content: 'Usar la relación fundamental:' },
                { type: 'text', content: '$a^2=b^2+c^2$.' },
                { type: 'block', math: 'a^2 = \\frac{9a}{2} + 3^2 \\Rightarrow a^2 = \\frac{9a}{2} + 9' },
                { type: 'text', content: 'Multiplicando por 2: $2a^2=9a+18 \\Rightarrow 2a^2-9a-18=0$.' },
                { type: 'subheading', content: 'Resolver la ecuación cuadrática para a:' },
                { type: 'block', math: '(2a+3)(a-6)=0' },
                { type: 'text', content: 'Las soluciones son $a=-\\frac{3}{2}$ y $a=6$. Como $a$ debe ser positivo, $a=6$.' },
                { type: 'subheading', content: 'Calcular $b^2$:' },
                { type: 'block', math: 'b^2 = \\frac{9a}{2} = \\frac{9(6)}{2} = \\frac{54}{2} = 27' },
                { type: 'subheading', content: 'Escribir la ecuación:' },
                { type: 'subheading', content: 'Ecuación de la Elipse:' },
                { type: 'block', math: '\\frac{x^2}{36} + \\frac{y^2}{27} = 1' },
            ]
        },
        // Ejercicio 4
        {
            id: 'elipse_ej4',
            title: 'Ejercicio 4',
            statement: 'Hallar la ecuación de la elipse cuya excentricidad es $e=\\frac{5}{8}$ y sus focos se encuentran sobre los puntos $(-2,6)$ y $(8,6)$.',
            solution: [
                { type: 'subheading', content: 'Identificar los focos:' },
                { type: 'text', content: '$F_1(-2,6)$ y $F_2(8,6)$.' },
                { type: 'subheading', content: 'Identificar el centro (h,k):' },
                { type: 'text', content: 'Punto medio de los focos.' },
                { type: 'block', math: 'h = \\frac{-2+8}{2} = \\frac{6}{2} = 3' },
                { type: 'block', math: 'k = \\frac{6+6}{2} = 6' },
                { type: 'text', content: 'Centro: $C(3,6)$.' },
                { type: 'subheading', content: 'Determinar la orientación:' },
                { type: 'text', content: 'Los focos tienen la misma coordenada y, por lo tanto, el eje focal es horizontal.' },
                { type: 'subheading', content: 'Calcular 2c (distancia entre focos) y luego c:' },
                { type: 'block', math: '2c = \\sqrt{(8-(-2))^2+(6-6)^2} = \\sqrt{10^2+0^2} = 10' },
                { type: 'block', math: 'c=5' },
                { type: 'subheading', content: 'Calcular a:' },
                { type: 'text', content: 'Usar la excentricidad $e=\\frac{c}{a}$.' },
                { type: 'block', math: '\\frac{5}{8} = \\frac{5}{a} \\Rightarrow a=8' },
                { type: 'subheading', content: 'Calcular $b^2$:' },
                { type: 'text', content: 'Usar $a^2=b^2+c^2$.' },
                { type: 'block', math: 'b^2 = a^2-c^2 = 8^2-5^2 = 64-25=39' },
                { type: 'subheading', content: 'Escribir la ecuación:' },
                { type: 'text', content: 'Para una elipse horizontal: $\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$.' },
                { type: 'subheading', content: 'Ecuación de la Elipse:' },
                { type: 'block', math: '\\frac{(x-3)^2}{64} + \\frac{(y-6)^2}{39} = 1' },
            ]
        },
        // Ejercicio 5
        {
            id: 'elipse_ej5',
            title: 'Ejercicio 5',
            statement: 'Hallar los elementos de la siguiente ecuación de la elipse $36x^2+11y^2-144x-44y-208=0$ y graficar.',
            solution: [
                { type: 'subheading', content: 'Convertir la ecuación general a la forma canónica: Completar cuadrados.' },
                { type: 'block', math: '(36x^2-144x)+(11y^2-44y)=208' },
                { type: 'block', math: '36(x^2-4x)+11(y^2-4y)=208' },
                { type: 'block', math: '36(x^2-4x+4)+11(y^2-4y+4)=208+36(4)+11(4)' },
                { type: 'block', math: '36(x-2)^2+11(y-2)^2=208+144+44' },
                { type: 'block', math: '36(x-2)^2+11(y-2)^2=396' },
                { type: 'text', content: 'Dividir por 396:' },
                { type: 'block', math: '\\frac{36(x-2)^2}{396} + \\frac{11(y-2)^2}{396} = 1' },
                { type: 'block', math: '\\frac{(x-2)^2}{11} + \\frac{(y-2)^2}{36} = 1' },
                { type: 'subheading', content: 'Identificar elementos:' },
                { type: 'text', content: 'Centro: $C(h,k)=(2,2)$.' },
                { type: 'text', content: 'Como $36>11$, el eje mayor es vertical.' },
                { type: 'block', math: 'a^2=36 \\Rightarrow a=6' },
                { type: 'block', math: 'b^2=11 \\Rightarrow b=\\sqrt{11}' },
                { type: 'block', math: 'c^2=a^2-b^2=36-11=25 \\Rightarrow c=5' },
                { type: 'subheading', content: 'Elementos de la Elipse:' },
                { type: 'text', content: 'Ecuación Canónica: $\\frac{(x-2)^2}{11} + \\frac{(y-2)^2}{36} = 1$' },
                { type: 'text', content: 'Centro: $C(2,2)$' },
                { type: 'text', content: 'Orientación: Vertical' },
                { type: 'text', content: 'Semieje mayor ($a$): $6$' },
                { type: 'text', content: 'Semieje menor ($b$): $\\sqrt{11} \\approx 3.317$' },
                { type: 'text', content: 'Distancia focal ($c$): $5$' },
                { type: 'text', content: 'Vértices ($V(h,k \\pm a)$): $V_1(2,2+6)=(2,8)$ y $V_2(2,2-6)=(2,-4)$' },
                { type: 'text', content: 'Focos ($F(h,k \\pm c)$): $F_1(2,2+5)=(2,7)$ y $F_2(2,2-5)=(2,-3)$' },
                { type: 'text', content: 'Co-vértices ($B(h \\pm b,k)$): $B_1(2+\\sqrt{11},2)$ y $B_2(2-\\sqrt{11},2)$' },
                { type: 'text', content: 'Excentricidad ($e=\\frac{c}{a}$): $e=\\frac{5}{6} \\approx 0.833$' },
                { type: 'text', content: 'Lado Recto ($LR=\\frac{2b^2}{a}$): $LR=\\frac{2(11)}{6}=\\frac{22}{6}=\\frac{11}{3} \\approx 3.667$' },
                { type: 'text', content: '(La graficación se omite en este formato de texto pero se puede realizar ubicando el centro, vértices y co-vértices).' },
            ]
        },
        // Ejercicio 6
        {
            id: 'elipse_ej6',
            title: 'Ejercicio 6',
            statement: 'Los vértices de una elipse son los puntos $V_1(1,1)$, $V_2(7,1)$ y su excentricidad es $e=\\frac{1}{3}$. Hallar la ecuación de la elipse y todos sus elementos.',
            solution: [
                { type: 'subheading', content: 'Identificar el centro (h,k):' },
                { type: 'text', content: 'Punto medio de los vértices.' },
                { type: 'block', math: 'h = \\frac{1+7}{2} = 4' },
                { type: 'block', math: 'k = \\frac{1+1}{2} = 1' },
                { type: 'text', content: 'Centro: $C(4,1)$.' },
                { type: 'subheading', content: 'Determinar la orientación y a:' },
                { type: 'text', content: 'Los vértices tienen la misma coordenada y, la elipse es horizontal.' },
                { type: 'block', math: '2a = \\text{distancia}(V_1,V_2) = \\sqrt{(7-1)^2+(1-1)^2} = \\sqrt{6^2} = 6' },
                { type: 'block', math: 'a=3' },
                { type: 'subheading', content: 'Calcular c:' },
                { type: 'text', content: 'Usamos $e=\\frac{c}{a}$.' },
                { type: 'block', math: '\\frac{1}{3} = \\frac{c}{3} \\Rightarrow c=1' },
                { type: 'subheading', content: 'Calcular $b^2$:' },
                { type: 'text', content: 'Usamos $a^2=b^2+c^2$.' },
                { type: 'block', math: 'b^2 = a^2-c^2 = 3^2-1^2 = 9-1=8' },
                { type: 'subheading', content: 'Ecuación y Elementos de la Elipse:' },
                { type: 'text', content: 'Ecuación Canónica: $\\frac{(x-4)^2}{9} + \\frac{(y-1)^2}{8} = 1$' },
                { type: 'text', content: 'Centro: $C(4,1)$' },
                { type: 'text', content: 'Orientación: Horizontal' },
                { type: 'text', content: 'Semieje mayor ($a$): $3$' },
                { type: 'text', content: 'Semieje menor ($b$): $\\sqrt{8}=2\\sqrt{2} \\approx 2.828$' },
                { type: 'text', content: 'Distancia focal ($c$): $1$' },
                { type: 'text', content: 'Vértices: $V_1(1,1)$ y $V_2(7,1)$' },
                { type: 'text', content: 'Focos ($F(h \\pm c,k)$): $F_1(4-1,1)=(3,1)$ y $F_2(4+1,1)=(5,1)$' },
                { type: 'text', content: 'Excentricidad ($e$): $\\frac{1}{3}$' },
                { type: 'text', content: 'Lado Recto ($LR=\\frac{2b^2}{a}$): $LR=\\frac{2(8)}{3}=\\frac{16}{3} \\approx 5.333$' },
            ]
        },
        // Ejercicio 7
        {
            id: 'elipse_ej7',
            title: 'Ejercicio 7',
            statement: 'Los focos de una elipse son los puntos $(-4,-2)$ y $(-4,6)$ y la longitud de cada lado recto es $6$. Hallar la ecuación de la elipse. (Asumiendo corrección a focos $F_1(-4,-2)$ y $F_2(-4,6)$ para una elipse con ejes paralelos a los coordenados).',
            solution: [
                { type: 'subheading', content: 'Identificar el centro (h,k):' },
                { type: 'block', math: 'h = \\frac{-4+(-4)}{2} = -4' },
                { type: 'block', math: 'k = \\frac{-2+6}{2} = 2' },
                { type: 'text', content: 'Centro: $C(-4,2)$.' },
                { type: 'subheading', content: 'Determinar la orientación y c:' },
                { type: 'text', content: 'Los focos tienen la misma coordenada x, la elipse es vertical.' },
                { type: 'block', math: '2c = \\text{distancia}(F_1,F_2) = \\sqrt{(-4-(-4))^2+(6-(-2))^2} = \\sqrt{0^2+8^2} = 8' },
                { type: 'block', math: 'c=4' },
                { type: 'subheading', content: 'Usar LR para relacionar a y b:' },
                { type: 'text', content: '$LR=\\frac{2b^2}{a}=6 \\Rightarrow 2b^2=6a \\Rightarrow b^2=3a$.' },
                { type: 'subheading', content: 'Usar la relación fundamental $a^2=b^2+c^2$ (para elipse vertical, a es semieje mayor):' },
                { type: 'block', math: 'a^2=3a+4^2 \\Rightarrow a^2-3a-16=0' },
                { type: 'subheading', content: 'Resolver para a:' },
                { type: 'block', math: 'a = \\frac{-(-3) \\pm \\sqrt{(-3)^2-4(1)(-16)}}{2(1)} = \\frac{3 \\pm \\sqrt{9+64}}{2} = \\frac{3 \\pm \\sqrt{73}}{2}' },
                { type: 'text', content: 'Como $a>0$, $a=\\frac{3+\\sqrt{73}}{2}$.' },
                { type: 'subheading', content: 'Calcular $b^2$:' },
                { type: 'block', math: 'b^2=3a=3\\left(\\frac{3+\\sqrt{73}}{2}\\right)=\\frac{9+3\\sqrt{73}}{2}' },
                { type: 'subheading', content: 'Calcular $a^2$:' },
                { type: 'block', math: 'a^2=\\left(\\frac{3+\\sqrt{73}}{2}\\right)^2 = \\frac{9+6\\sqrt{73}+73}{4} = \\frac{82+6\\sqrt{73}}{4} = \\frac{41+3\\sqrt{73}}{2}' },
                { type: 'subheading', content: 'Ecuación de la Elipse (con focos corregidos):' },
                { type: 'block', math: '\\frac{(x-(-4))^2}{b^2} + \\frac{(y-2)^2}{a^2} = 1' },
                { type: 'block', math: '\\frac{(x+4)^2}{\\frac{9+3\\sqrt{73}}{2}} + \\frac{(y-2)^2}{\\frac{41+3\\sqrt{73}}{2}} = 1' },
            ]
        },
        // Ejercicio 8
        {
            id: 'elipse_ej8',
            title: 'Ejercicio 8',
            statement: 'El centro de una elipse es el punto $C(-2,-1)$, uno de sus vértices es el punto $(3,-1)$ y la longitud de $LR=4$. Hallar la ecuación y todos sus elementos.',
            solution: [
                { type: 'text', content: 'Centro: $C(-2,-1)$.' },
                { type: 'subheading', content: 'Determinar orientación y a:' },
                { type: 'text', content: 'El centro $(-2,-1)$ y el vértice $(3,-1)$ tienen la misma coordenada y. La elipse es horizontal.' },
                { type: 'block', math: 'a = \\text{distancia}(C,V) = \\sqrt{(3-(-2))^2+(-1-(-1))^2} = \\sqrt{5^2} = 5' },
                { type: 'subheading', content: 'Calcular $b^2$ usando LR:' },
                { type: 'text', content: '$LR=\\frac{2b^2}{a}$.' },
                { type: 'block', math: '4 = \\frac{2b^2}{5} \\Rightarrow 2b^2=20 \\Rightarrow b^2=10' },
                { type: 'subheading', content: 'Calcular c:' },
                { type: 'text', content: '$a^2=b^2+c^2$.' },
                { type: 'block', math: 'c^2 = a^2-b^2 = 5^2-10 = 25-10=15 \\Rightarrow c=\\sqrt{15}' },
                { type: 'subheading', content: 'Ecuación y Elementos de la Elipse:' },
                { type: 'text', content: 'Ecuación Canónica: $\\frac{(x+2)^2}{25} + \\frac{(y+1)^2}{10} = 1$' },
                { type: 'text', content: 'Centro: $C(-2,-1)$' },
                { type: 'text', content: 'Orientación: Horizontal' },
                { type: 'text', content: 'Semieje mayor ($a$): $5$' },
                { type: 'text', content: 'Semieje menor ($b$): $\\sqrt{10} \\approx 3.162$' },
                { type: 'text', content: 'Distancia focal ($c$): $\\sqrt{15} \\approx 3.873$' },
                { type: 'text', content: 'Vértices ($V(h \\pm a,k)$): $V_1(-2-5,-1)=(-7,-1)$ y $V_2(-2+5,-1)=(3,-1)$' },
                { type: 'text', content: 'Focos ($F(h \\pm c,k)$): $F_1(-2-\\sqrt{15},-1)$ y $F_2(-2+\\sqrt{15},-1)$' },
                { type: 'text', content: 'Lado Recto ($LR$): $4$ (dado)' },
                { type: 'text', content: 'Excentricidad ($e=\\frac{c}{a}$): $e=\\frac{\\sqrt{15}}{5} \\approx 0.775$' },
            ]
        },
        // Ejercicio 9
        {
            id: 'elipse_ej9',
            title: 'Ejercicio 9',
            statement: 'Hallar la ecuación de la elipse cuyos vértices son los puntos: $V_1(7,-2)$; $V_2(-5,-2)$ y pasa por el punto $P(3,2)$.',
            solution: [
                { type: 'subheading', content: 'Identificar el centro (h,k):' },
                { type: 'block', math: 'h = \\frac{7+(-5)}{2} = 1' },
                { type: 'block', math: 'k = \\frac{-2+(-2)}{2} = -2' },
                { type: 'text', content: 'Centro: $C(1,-2)$.' },
                { type: 'subheading', content: 'Determinar orientación y a:' },
                { type: 'text', content: 'Elipse horizontal.' },
                { type: 'block', math: '2a = \\text{distancia}(V_1,V_2) = \\sqrt{(7-(-5))^2+(-2-(-2))^2} = \\sqrt{12^2} = 12' },
                { type: 'block', math: 'a=6 \\Rightarrow a^2=36' },
                { type: 'subheading', content: 'Forma parcial de la ecuación:' },
                { type: 'block', math: '\\frac{(x-1)^2}{36} + \\frac{(y+2)^2}{b^2} = 1' },
                { type: 'subheading', content: 'Usar el punto P(3,2) para hallar $b^2$:' },
                { type: 'block', math: '\\frac{(3-1)^2}{36} + \\frac{(2-(-2))^2}{b^2} = 1' },
                { type: 'block', math: '\\frac{2^2}{36} + \\frac{4^2}{b^2} = 1 \\Rightarrow \\frac{4}{36} + \\frac{16}{b^2} = 1 \\Rightarrow \\frac{1}{9} + \\frac{16}{b^2} = 1' },
                { type: 'block', math: '\\frac{16}{b^2} = 1 - \\frac{1}{9} = \\frac{8}{9}' },
                { type: 'block', math: '8b^2 = 16 \\times 9 \\Rightarrow b^2 = \\frac{144}{8} = 18' },
                { type: 'subheading', content: 'Ecuación de la Elipse:' },
                { type: 'block', math: '\\frac{(x-1)^2}{36} + \\frac{(y+2)^2}{18} = 1' },
            ]
        },
        // Ejercicio 10
        {
            id: 'elipse_ej10',
            title: 'Ejercicio 10',
            statement: 'Hallar la ecuación de la elipse cuyos vértices son los puntos $V_1(6,1)$ y $V_2(-2,1)$ y pasa por el punto $P(2,3)$.',
            solution: [
                { type: 'subheading', content: 'Identificar el centro (h,k):' },
                { type: 'block', math: 'h = \\frac{6+(-2)}{2} = 2' },
                { type: 'block', math: 'k = \\frac{1+1}{2} = 1' },
                { type: 'text', content: 'Centro: $C(2,1)$.' },
                { type: 'subheading', content: 'Determinar orientación y a:' },
                { type: 'text', content: 'Elipse horizontal.' },
                { type: 'block', math: '2a = \\text{distancia}(V_1,V_2) = \\sqrt{(6-(-2))^2+(1-1)^2} = \\sqrt{8^2} = 8' },
                { type: 'block', math: 'a=4 \\Rightarrow a^2=16' },
                { type: 'subheading', content: 'Forma parcial de la ecuación:' },
                { type: 'block', math: '\\frac{(x-2)^2}{16} + \\frac{(y-1)^2}{b^2} = 1' },
                { type: 'subheading', content: 'Usar el punto P(2,3) para hallar $b^2$:' },
                { type: 'block', math: '\\frac{(2-2)^2}{16} + \\frac{(3-1)^2}{b^2} = 1' },
                { type: 'block', math: '\\frac{0}{16} + \\frac{2^2}{b^2} = 1 \\Rightarrow \\frac{4}{b^2} = 1 \\Rightarrow b^2=4' },
                { type: 'subheading', content: 'Ecuación de la Elipse:' },
                { type: 'block', math: '\\frac{(x-2)^2}{16} + \\frac{(y-1)^2}{4} = 1' },
            ]
        },
        // Ejercicio 11
        {
            id: 'elipse_ej11',
            title: 'Ejercicio 11',
            statement: 'Hallar todos los elementos de la elipse cuya ecuación es: $5x^2+4y^2-30x-4y+46=0$.',
            solution: [
                { type: 'subheading', content: 'Convertir a forma canónica:' },
                { type: 'block', math: '5(x^2-6x)+4(y^2-y)=-46' },
                { type: 'block', math: '5(x^2-6x+9)+4(y^2-y+\\frac{1}{4})=-46+5(9)+4(\\frac{1}{4})' },
                { type: 'block', math: '5(x-3)^2+4(y-\\frac{1}{2})^2=-46+45+1' },
                { type: 'block', math: '5(x-3)^2+4(y-\\frac{1}{2})^2=0' },
                { type: 'subheading', content: 'Análisis:' },
                { type: 'text', content: 'La suma de dos términos cuadrados (multiplicados por coeficientes positivos) es cero si y solo si cada término es cero.' },
                { type: 'block', math: '(x-3)^2=0 \\Rightarrow x=3' },
                { type: 'block', math: '(y-\\frac{1}{2})^2=0 \\Rightarrow y=\\frac{1}{2}' },
                { type: 'subheading', content: 'Elementos de la Elipse (Caso Degenerado):' },
                { type: 'text', content: 'La ecuación representa un punto, que es un caso degenerado de una elipse.' },
                { type: 'text', content: 'Punto (Centro): $(3, \\frac{1}{2})$' },
                { type: 'text', content: 'Semiejes: $a=0, b=0$' },
                { type: 'text', content: 'Distancia focal: $c=0$' },
                { type: 'text', content: 'No hay vértices, focos (distintos del centro), lado recto o excentricidad definidos en el sentido tradicional.' },
            ]
        },
        // Ejercicio 12
        {
            id: 'elipse_ej12',
            title: 'Ejercicio 12',
            statement: 'Hallar todos los elementos y graficar de la ecuación dada por: $9x^2+4y^2-36x-8y+76=0$.',
            solution: [
                { type: 'subheading', content: 'Convertir a forma canónica:' },
                { type: 'block', math: '9(x^2-4x)+4(y^2-2y)=-76' },
                { type: 'block', math: '9(x^2-4x+4)+4(y^2-2y+1)=-76+9(4)+4(1)' },
                { type: 'block', math: '9(x-2)^2+4(y-1)^2=-76+36+4' },
                { type: 'block', math: '9(x-2)^2+4(y-1)^2=-36' },
                { type: 'subheading', content: 'Análisis:' },
                { type: 'text', content: 'El lado izquierdo de la ecuación es una suma de términos que son $\\ge 0$ (cuadrados multiplicados por coeficientes positivos). El lado derecho es $-36$ (un número negativo). No existen valores reales de x e y para los cuales la suma de dos cantidades no negativas sea igual a un número negativo.' },
                { type: 'subheading', content: 'Elementos de la Elipse (Caso Degenerado):' },
                { type: 'text', content: 'La ecuación no tiene representación gráfica en el plano real. Corresponde al conjunto vacío o una elipse imaginaria.' },
                { type: 'text', content: 'No hay elementos reales (centro, vértices, focos, etc.) a listar.' },
                { type: 'text', content: 'No hay gráfica en el plano real.' },
            ]
        },
    ];

    const introContent = [
        {type: 'text', content: "A continuación, se presenta la resolución detallada de cada uno de los ejercicios propuestos."},
        {type: 'subheading', content: "Conceptos Fundamentales de la Elipse"},
        {type: 'text', content: "Centro $(h,k)$"},
        {type: 'text', content: "Semieje mayor ($a$), Semieje menor ($b$)"},
        {type: 'text', content: "Distancia del centro al foco ($c$)"},
        {type: 'text', content: "Relación fundamental: $a^2=b^2+c^2$ (para $a>b$)"},
        {type: 'text', content: "Excentricidad ($e$): $e=\\frac{c}{a}$, donde $0<e<1$"},
        {type: 'text', content: "Lado Recto ($LR$): $LR=\\frac{2b^2}{a}$"},
        {type: 'text', content: "Ecuación Canónica Horizontal: $\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$"},
        {type: 'text', content: "Ecuación Canónica Vertical: $\\frac{(x-h)^2}{b^2} + \\frac{(y-k)^2}{a^2} = 1$"},
    ];

    return (
        <section id="ejercicios" className="content-section active flex-grow">
            <h2 className="text-3xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-200 pb-2">Resolución del Trabajo Práctico N.º 1 de Matemáticas: Elipses</h2>
            
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                {introContent.map((item, index) => {
                     if (item.type === 'text') {
                        return <p key={`intro-${index}`} className="text-gray-700 mb-1 leading-relaxed">{renderTextWithInlineMath(item.content)}</p>;
                    } else if (item.type === 'subheading') {
                        return <h4 key={`intro-${index}`} className="text-xl font-semibold text-indigo-700 mt-3 mb-2">{item.content}</h4>;
                    }
                    return null;
                })}
            </div>

            {exercises.map(exercise => (
                <ExerciseItem 
                    key={exercise.id}
                    title={exercise.title}
                    statement={exercise.statement}
                    solution={exercise.solution}
                />
            ))}
            <div className="mt-8 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                <p className="text-indigo-700">Fin de los ejercicios.</p>
            </div>
        </section>
    );
};
export default ExerciseSection;