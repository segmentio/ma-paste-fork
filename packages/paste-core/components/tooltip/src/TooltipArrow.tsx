import * as React from 'react';
import {TooltipPrimitiveArrow} from '@twilio-paste/tooltip-primitive';
import type {TooltipPrimitiveArrowProps} from '@twilio-paste/tooltip-primitive';
import {useTheme} from '@twilio-paste/theme';

export type TooltipArrowProps = TooltipPrimitiveArrowProps;

const TooltipArrow: React.FC<React.PropsWithChildren<TooltipArrowProps>> = (props) => {
  const theme = useTheme();

  return (
    <TooltipPrimitiveArrow
      {...props}
      size={theme.fontSizes.fontSize50}
      stroke={theme.borderColors.colorBorderInverse}
      fill={theme.backgroundColors.colorBackgroundBodyInverse}
    />
  );
};

TooltipArrow.displayName = 'TooltipArrow';
export {TooltipArrow};
