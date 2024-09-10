import type { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';


const styles: StyleDictionary = {
  h1: {
    fontSize: 10,
    bold: true,
    margin: [0, 20],
  },
};

export const billReport = (): TDocumentDefinitions => {

  return {
    content: [
      {
        /*columns: [
          {
            text: [
              'HOSPITAL CHULUCANAS \n',
              'REPORTE DE RECURSOS DE SALUD',
            ],
            style: 'h1',
            width: 465,
            alignment: 'center',
          },
          {
            text: [
              'Fecha: 09/09/24\n',
              'Hora: 17:13:10\n',
              'Página: 1',
            ],
            width: 90,
            alignment: 'left',
          },
        ],*/
        columns: [
            {

                text: '',

            },
          {
            text: [
              'HOSPITAL CHULUCANAS \n',
              'REPORTE DE RECURSOS DE SALUD',
            ],
            style: 'h1',
            alignment: 'center',
          },
          {
            text: [
              'Fecha: 09/09/24\n',
              'Hora: 17:13:10\n',
              'Página: 1',
            ],
            alignment: 'right',
          },
        ],
      },
		{
    style: 'tableExample',
    table: {
        widths: [120, 120, 120, 120],
        body: [
            [
                { text: 'Periodo     202409', alignment: 'left', margin: [5, 5] },
                { text: 'IPRESS     00002161', alignment: 'left', margin: [5, 5] },
                { text: '', alignment: 'left', margin: [5, 5] },
                { text: '', alignment: 'left', margin: [5, 5] }
            ],
            [
                { text: '', colSpan: 4, margin: [5, 5] },
                {}, {}, {} 
            ],
            [
                { text: 'Cons. Fisicos     118', alignment: 'left', margin: [5, 5] },
                { text: 'Cons. Funcionales     27254', alignment: 'left', margin: [5, 5] },
                { text: 'Camas     137', alignment: 'left', margin: [5, 5] },
                { text: 'Medicos     235', alignment: 'left', margin: [5, 5] }
            ],

            [
                { text: '', colSpan: 4, margin: [5, 5] },
                {}, {}, {}
            ],
            [
                { text: 'SERUMS     0', alignment: 'left', margin: [5, 5] },
                { text: 'Residentes     0', alignment: 'left', margin: [5, 5] }, 
                { text: 'Enfermera     1', alignment: 'left', margin: [5, 5] }, 
                { text: 'Odontologo     1', alignment: 'left', margin: [5, 5] } 
            ],
            [
                { text: '', colSpan: 4, margin: [5, 5] }, 
                {}, {}, {} 
            ],
            [
                { text: 'Psicologo     1', alignment: 'left', margin: [5, 5] }, 
                { text: 'Nutricionista     1', alignment: 'left', margin: [5, 5] }, 
                { text: 'Tec. Medico     5', alignment: 'left', margin: [5, 5] }, 
                { text: 'Obstetriz     1', alignment: 'left', margin: [5, 5] } 
            ],
            [
                { text: '', colSpan: 4, margin: [5, 5] }, 
                {}, {}, {}
            ],
            [
                { text: 'Farmaceutico     1', alignment: 'left', margin: [5, 5] },
                { text: 'Auxiliar     3', alignment: 'left', margin: [5, 5] }, 
                { text: 'Otros     2', alignment: 'left', margin: [5, 5] }, 
                { text: 'Ambulancia     0', alignment: 'left', margin: [5, 5] } 
            ]
        ]
    },
    layout: {
        hLineWidth: function(i, node) { // Define el ancho de las líneas horizontales en la tabla.
            if (i === 0 || i === node.table.body.length) {
                return 1; 
            }
            return 0; 
        },
        vLineWidth: function(i, node) { // Define el ancho de las líneas verticales en la tabla.
            if (i === 0 || i === node.table.widths.length) {
                return 1; 
            }
            return 0; 
        },
        hLineColor: function(i, node) { // Define el color de las líneas horizontales en la tabla.
            if (i === 0 || i === node.table.body.length) {
                return 'black'; 
            }
            return 'white'; 
        },
        vLineColor: function(i, node) { // Define el color de las líneas verticales en la tabla.
            if (i === 0 || i === node.table.widths.length) {
                return 'black'; 
            }
            return 'white'; 
        }
    },
    margin: [10, 10, 10, 10]
}
    ],
    styles: styles,
  };
};