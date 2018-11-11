import React from 'react';
import { FormattedMessage } from 'react-intl';

const errorMap = {
    'auth/user-not-found': 'There is no user corresponding to the email address',
    'auth/network-request-failed': 'A network error (such as timeout, interrupted connection or unreachable host) has occurred',
    'auth/internal-error': 'This service is not available from Cuba. If you believe the country of origin was incorrectly identified, please report it at https://support.google.com/websearch/contact/ip',
    'auth/wrong-password': 'The password is invalid',
    'auth/email-already-in-use': <FormattedMessage id="form.error.email.already.in.use" defaultMessage="The email address is already in use by another account." />,
    'auth/requires-recent-login': <FormattedMessage id="error.requires.recent.login" defaultMessage="This operation is sensitive and requires recent authentication. Log in again before retrying this request." />,
};

export function isFirebaseError(error) {
    return typeof error === 'object' && error !== null
        && typeof error.code === 'string'
        && typeof error.message === 'string';
}

export function resolveError(error) {
    if (isFirebaseError(error)) {
        if (errorMap[error.code]) {
            return errorMap[error.code];
        }
        return error.message;
    }
    return error;
}
