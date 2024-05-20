import {
  FlatList,
  Image,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DropDownProps} from './dropDown.interface';
import {colors, images} from '../../themes';

const DropDown = ({label, data, onSelect}: DropDownProps) => {
  const DropdownButton = React.useRef<TouchableOpacity>(null);
  const [visible, setVisible] = React.useState(false);
  const [dropdownTop, setDropdownTop] = React.useState(0);
  const [dropdownLeft, setDropdownLeft] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  const openDropdown = () => {
    DropdownButton?.current?.measure((_fx, _fy, w, h, px, py) => {
      setDropdownTop(py + h);
      setDropdownLeft(px);
      setWidth(w);
    });
    setVisible(true);
  };

  const toggleDropDown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const onItemPress = (item: string) => {
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({item}: {item: string}) => {
    return (
      <TouchableOpacity
        style={[styles.item, {width: width}]}
        onPress={() => onItemPress(item)}>
        <Text style={styles.font}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}>
          <View
            style={[styles.dropdown, {top: dropdownTop, left: dropdownLeft}]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => `${item}-${index}`}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.button, {height: Platform.OS === 'ios' ? 40 : 50}]}
      onPress={toggleDropDown}>
      {renderDropdown()}
      <Text style={[styles.buttonText, styles.font]}>{label}</Text>
      <Image source={images.iconArrowDown} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '20%',
    paddingHorizontal: 10,
    zIndex: 1,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  buttonText: {
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.grey,
  },
  font: {
    fontSize: 16,
    color: colors.black,
  },
});
