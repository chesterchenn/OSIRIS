import React, { useEffect, useState } from 'react';
import {
  Input,
  Grid,
  GridItem,
  Container,
  VStack,
  Button,
} from '@chakra-ui/react';
import styles from './color.module.scss';

function getVal(val: string) {
  return parseInt(val, 10).toString(16).padStart(2, '0');
}

function Colors() {
  const [bgColor, setBGColor] = useState('');
  const [bgHex, setBGHex] = useState('');
  const [red, setRed] = useState('0');
  const [green, setGreen] = useState('0');
  const [blue, setBlue] = useState('0');
  const [hex, setHex] = useState('');
  const [preVal, setPreVal] = useState('');

  useEffect(() => {
    if (red === '' || green === '' || blue === '') {
      return;
    }
    const [redHex, greenHex, blueHex] = [
      getVal(red),
      getVal(green),
      getVal(blue),
    ];
    setBGColor(`#${redHex}${greenHex}${blueHex}`);
  }, [red, green, blue]);

  useEffect(() => {
    const arr = [];
    let hexValue = hex;
    if (hex.startsWith('#')) {
      hexValue = hex.slice(1);
    }

    for (let i = 0; i < 3; i += 1) {
      const v = hexValue.slice(i * 2, (i + 1) * 2);
      const t = parseInt(v, 16).toString(10);
      arr.push(t);
    }
    const rgb = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
    setBGHex(rgb);
  }, [hex]);

  const handleColorChange = (val: string, key: string) => {
    let value = val.replace(/[^0-9]/g, '');
    if (Number(value) > 255) value = '255';
    if (key === 'red') {
      setRed(value);
      return;
    }
    if (key === 'green') {
      setGreen(value);
      return;
    }
    if (key === 'blue') {
      setBlue(value);
    }
  };

  const handleFocus = (val: string, key: string) => {
    setPreVal(val);
    handleColorChange('', key);
  };

  const handleBlur = (val: string, key: string) => {
    if (val === '') {
      setPreVal('');
      handleColorChange(preVal, key);
    }
  };

  const handleColorReset = () => {
    setRed('0');
    setBlue('0');
    setGreen('0');
  };

  const handleHexChange = (value: string) => {
    const val = value.replace(/[^0-9a-fA-F]/g, '');
    setHex(val);
  };

  const handlehexReset = () => {
    setHex('#000000');
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <Container>
        <VStack>
          <Grid templateColumns="80px 1fr">
            <GridItem alignSelf="center">红色R</GridItem>
            <GridItem w="100%" h="10">
              <Input
                placeholder={preVal}
                focusBorderColor="#ff4757"
                value={red}
                onChange={(e) => handleColorChange(e.target.value, 'red')}
                onFocus={(e) => handleFocus(e.target.value, 'red')}
                onBlur={(e) => handleBlur(e.target.value, 'red')}
              />
            </GridItem>
          </Grid>
          <Grid templateColumns="80px 1fr">
            <GridItem alignSelf="center">绿色G</GridItem>
            <GridItem w="100%" h="10">
              <Input
                placeholder={preVal}
                focusBorderColor="#2ed573"
                value={green}
                onChange={(e) => handleColorChange(e.target.value, 'green')}
                onFocus={(e) => handleFocus(e.target.value, 'green')}
                onBlur={(e) => handleBlur(e.target.value, 'green')}
              />
            </GridItem>
          </Grid>
          <Grid templateColumns="80px 1fr">
            <GridItem alignSelf="center">蓝色B</GridItem>
            <GridItem w="100%" h="10">
              <Input
                placeholder={preVal}
                focusBorderColor="#1e90ff"
                value={blue}
                onChange={(e) => handleColorChange(e.target.value, 'blue')}
                onFocus={(e) => handleFocus(e.target.value, 'blue')}
                onBlur={(e) => handleBlur(e.target.value, 'blue')}
              />
            </GridItem>
          </Grid>
          <Button colorScheme="blue" onClick={handleColorReset}>
            重置
          </Button>
          <div
            className={styles.showColor}
            style={{ backgroundColor: bgColor }}
          />
          <div>{bgColor}</div>
        </VStack>
      </Container>

      <Container>
        <VStack>
          <Grid templateColumns="80px 1fr">
            <GridItem alignSelf="center">16进制</GridItem>
            <GridItem w="100%" h="10">
              <Input
                placeholder="请输入16进制"
                onChange={(e) => handleHexChange(e.target.value)}
                value={hex}
              />
            </GridItem>
          </Grid>
          <Button colorScheme="blue" onClick={handlehexReset}>
            重置
          </Button>
          <div
            className={styles.showColor}
            style={{ backgroundColor: bgHex }}
          />
          <div>{bgHex}</div>
        </VStack>
      </Container>
    </Grid>
  );
}

export default Colors;
