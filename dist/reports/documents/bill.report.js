"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billReport = void 0;
const styles = {
    h1: {
        fontSize: 10,
        bold: true,
        margin: [0, 20],
    },
};
const billReport = () => {
    return {
        content: [
            {
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
                    hLineWidth: function (i, node) {
                        if (i === 0 || i === node.table.body.length) {
                            return 1;
                        }
                        return 0;
                    },
                    vLineWidth: function (i, node) {
                        if (i === 0 || i === node.table.widths.length) {
                            return 1;
                        }
                        return 0;
                    },
                    hLineColor: function (i, node) {
                        if (i === 0 || i === node.table.body.length) {
                            return 'black';
                        }
                        return 'white';
                    },
                    vLineColor: function (i, node) {
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
exports.billReport = billReport;
//# sourceMappingURL=bill.report.js.map