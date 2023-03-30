import React from 'react';
import { Box, Button, useMultiStyleConfig, useTab } from '@chakra-ui/react';

const CustomTab = React.forwardRef((props, ref) => {
  const tabProps = useTab({ ...props, ref });

  // Hook into the Tabs `size`, `variant`, props
  const styles = useMultiStyleConfig('Tabs', tabProps);

  return (
    <Button __css={styles.tab} {...tabProps}>
      <Box as="span" mr="2"></Box>
      {tabProps.children}
    </Button>
  );
});

export default CustomTab;
