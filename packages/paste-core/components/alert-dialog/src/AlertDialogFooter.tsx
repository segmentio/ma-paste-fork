import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {Stack} from '@twilio-paste/stack';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface AlertDialogFooterProps extends HTMLPasteProps<'div'>, Pick<BoxProps, 'element'> {
  destructive?: boolean;
  onConfirm: () => void;
  onConfirmLabel: string;
  onDismiss: () => void;
  onDismissLabel: string;
  onConfirmDisabled?: boolean;
}

export const AlertDialogFooter = React.forwardRef<HTMLDivElement, AlertDialogFooterProps>(
  (
    {
      destructive,
      element = 'ALERT_DIALOG_FOOTER',
      onConfirm,
      onConfirmLabel,
      onDismiss,
      onDismissLabel,
      onConfirmDisabled = false,
      ...props
    },
    ref
  ) => {
    const primaryVariant = destructive ? 'destructive' : 'primary';

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        flexShrink={0}
        display="flex"
        padding="space90"
        paddingTop="space0"
        border="none"
        element={element}
        justifyContent="flex-end"
        ref={ref}
      >
        <Stack orientation="horizontal" spacing="space50">
          <Button variant="secondary" onClick={onDismiss}>
            {onDismissLabel}
          </Button>
          <Button variant={primaryVariant} onClick={onConfirm} disabled={destructive && onConfirmDisabled}>
            {onConfirmLabel}
          </Button>
        </Stack>
      </Box>
    );
  }
);

AlertDialogFooter.displayName = 'AlertDialogFooter';

AlertDialogFooter.propTypes = {
  destructive: PropTypes.bool,
  element: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onConfirmLabel: PropTypes.string.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onDismissLabel: PropTypes.string.isRequired,
};
