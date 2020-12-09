import React from "react";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Paper from "material-ui/Paper";
import { MenuItem } from "material-ui/Menu";
import Downshift from "downshift";
import Chip from "material-ui/Chip";
import Button from "material-ui/Button";
import Grid from "material-ui/Grid"
import CancelIcon from "material-ui-icons/Cancel";
import Typography from "material-ui/Typography";

const styles = theme => ({
  alignItems :
  {
    display : 'flex',
    flexDirection : 'column',
    alignItems :'center',
    justifyContent : 'center',
    marginBottom : 5,
  } ,
  inputCenter :
  {
    textAlign : 'center'
  },
  chipContainer: {
    background: 'transparent',
    display: "inline-block",
    marginBottom: 20
  },
  chip: {
    marginTop: 20,
    marginRight: 10,
  },
  paper: {
    alignItems :'center',
    justifyContent : 'center',
    width: "190px",
    background : `#00fff`,
    maxHeight: "200px",
    overflowY: "auto",
    marginBottom :5,
  },
});

const renderInput = inputProps => {
  const { InputProps, classes, availableItems } = inputProps;

  const allItemSelected = availableItems.length === 0;

  return (
    <div className={classes.alignItems}>
    <TextField
      variant='outlined'
      margin='dense'
      halfWidth 
      label={
        allItemSelected ? "No more symptoms to add" : "Choose symptoms faced"
      }
      disabled={allItemSelected}
      InputProps={{
        classes: {
          input: classes.input
        },
        ...InputProps
      }}
    />
    </div>
  );
};

const renderChipList = inputProps => {
  const { classes, selectedItem, onRemoveItem } = inputProps;
  return (
    <div className={classes.alignItems}>
    <div className={classes.chipContainer}>
      {selectedItem.length > 0 &&
        selectedItem.map(item => (
          <Chip
            key={item}
            className={classes.chip}
            label={item}
            deleteIcon={<CancelIcon />}
            onDelete={() => onRemoveItem(item)}
            onClick={() => onRemoveItem(item)}
          />
        ))}
    </div>
    </div>
  );
};

const renderSuggestion = params => {
  const { item, index, itemProps, highlightedIndex, selectedItem } = params;
  const isHighlighted = highlightedIndex === index;
  const isSelected = selectedItem.indexOf(item.name) > -1;

  return (
   
    !isSelected && (
      
      <MenuItem
        {...itemProps}
        key={item.id}
        selected={isHighlighted}
        component="div"
      >
        {item.name}
      </MenuItem>
       
    )
   
  );
};

const getSuggestions = (inputValue, itemList) =>
  itemList.filter(item =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

function MultiChipSelect(props) {
  const { classes, availableItems, onRemoveItem, ...rest } = props;

  return (
  <div className={classes.alignItems}>
    <Downshift {...rest}>
      {({
        getInputProps,
        getItemProps,
        inputValue,
        selectedItem,
        highlightedIndex,
        toggleMenu,
        isOpen
      }) => (
        <div>
          {renderChipList({
            classes,
            onRemoveItem,
            selectedItem
          })}

          {renderInput({
            classes,
            selectedItem,
            availableItems,
            InputProps: {
              ...getInputProps({
                onClick: () => toggleMenu()
              })
            }
          })}

          {isOpen && (
            <div className={classes.alignItems}>
            <Paper className={classes.paper} square>
              {getSuggestions(inputValue, availableItems).map((item, index) =>
                renderSuggestion({
                  item,
                  index,
                  itemProps: getItemProps({
                    item: item.name
                  }),
                  highlightedIndex,
                  selectedItem
                })
              )}
            </Paper>
            </div>
          )}
        </div>
      )}
    </Downshift>
        
  
        
    </div>
  );
}

export default withStyles(styles)(MultiChipSelect);
