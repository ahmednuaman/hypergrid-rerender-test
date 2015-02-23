'use strict';

(function() {

    var values = {
        defaultFont: '13px Tahoma, Geneva, sans-serif',
        foregroundColor: '#010126',
        backgroundColor: '#FFFFFF',
        foregroundSelColor: '#010126',
        backgroundSelColor: '#B7DBFF',
        fixedRowBackgroundColor: '#DFE3E8',
        fixedColumnBackgroundColor: '#DFE3E8',
        topLeftBackgroundColor: '#DFE3E8',
        fixedColFGSelColor: '#010126',
        fixedRowFGSelColor: '#010126',
        fixedColBGSelColor: '#FFDC61',
        fixedRowBGSelColor: '#FFDC61',
        fixedRowAlign: 'center',
        fixedColAlign: 'center',
        cellPadding: 5,
        rowHeight: 20,
        columnWidth: 100,
        repaintIntervalRate: 15,
        lineColor: '#C7C7C7',
        gridLinesH: true,
        gridLinesV: true,
        scrollerSize: 15,
        voffset: '0px',
        hoffset: '0px'
    };

    Polymer({ /* jshint ignore:line */
        values: values
    });

})(); /* jshint ignore:line */
