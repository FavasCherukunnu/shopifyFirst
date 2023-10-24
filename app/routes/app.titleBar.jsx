import { Page } from '@shopify/polaris'
import React from 'react'

export default function TitleBar() {
    return (
        <Page>
            <ui-title-bar title="Products">
            <button onclick="console.log('Secondary action')">Secondary action</button>
            <button variant="primary" onclick="console.log('Primary action')">
                Primary action
            </button>
        </ui-title-bar>
        </Page>

    )
}
