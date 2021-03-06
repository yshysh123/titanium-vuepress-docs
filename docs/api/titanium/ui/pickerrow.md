# Titanium.UI.PickerRow

<ProxySummary/>

## Overview

Use the <Titanium.UI.createPickerRow> method to create a picker row control. In an Alloy application,
you can use a **`<PickerRow>`** element inside a `<PickerColumn>` element. You can also use `<Row>`
as a shorthand for `<PickerRow>` (see Examples).

Views added to picker rows is only supported on iOS.

## Examples

### Custom View for Row (iOS only)

Create a two-column picker, with the first column containing a child view, and automatically
select a row in each column.

    Ti.UI.backgroundColor = 'white';
    var win = Ti.UI.createWindow({
      exitOnClose: true,
      layout: 'vertical'
    });

    var fruit = [ 'Bananas', 'Strawberries', 'Mangos', 'Grapes' ];
    var color = [ 'red', 'green', 'blue', 'orange' ];

    var column1 = Ti.UI.createPickerColumn();

    for(var i=0, ilen=fruit.length; i<ilen; i++){
      var row = Ti.UI.createPickerRow();

      var label = Ti.UI.createLabel({
        color:'red',
        font:{fontSize:20,fontWeight:'bold'},
        text: fruit[i],
        textAlign:'left',
        width:'126'
      });

      row.add(label);
      column1.addRow(row);
    }

    var column2 = Ti.UI.createPickerColumn();

    for(var i=0, ilen=color.length; i<ilen; i++){
      var row = Ti.UI.createPickerRow({
        title: color[i],
        font: {fontSize:30}
      });
      column2.addRow(row);
    }

    var picker = Ti.UI.createPicker({
      top:50,
      columns: [column1, column2],
      selectionIndicator: true
    });

    win.add(picker);

    win.open();

    // must be after picker has been displayed
    picker.setSelectedRow(0, 2, false); // select Mangos
    picker.setSelectedRow(1, 3, false); // select Orange

### Alloy XML Markup

Previous example as an Alloy view.

pickerrowexample.xml

    <Alloy>
        <Window id="win" backgroundColor="white" layout="vertical" exitOnClose="true">
            <Picker id="picker" top="50" selectionIndicator="true">
                <PickerColumn id="column1">

                    <!-- On iOS, views can be added to picker rows -->
                    <PickerRow>
                        <Label color="red" textAlign="left" width="126">Bananas</Label>
                    </PickerRow>
                    <PickerRow>
                        <Label color="red" textAlign="left" width="126">Strawberries</Label>
                    </PickerRow>
                    <PickerRow>
                        <Label color="red" textAlign="left" width="126">Mangos</Label>
                    </PickerRow>
                    <PickerRow>
                        <Label color="red" textAlign="left" width="126">Grapes</Label>
                    </PickerRow>
                </PickerColumn>

                <!-- Picker shorthand notation -->
                <Column id="column2">
                    <Row title="red"/>
                    <Row title="green"/>
                    <Row title="blue"/>
                    <Row title="orange"/>
                </Column>
            </Picker>
        </Window>
    </Alloy>

pickerrowexample.js:

    $.picker.setSelectedRow(0, 2, false);
    $.picker.setSelectedRow(1, 3, false);

<ApiDocs/>
