import { Card, Layout, Page } from '@shopify/polaris'
import React from 'react'

export default function Sample() {
    return (
        <Page>
            <ui-title-bar title='sample page' />
            <Layout>
                <Layout.Section>
                    <Card>

                        <div>
                            <form
                                data-save-bar
                                onsubmit="console.log('submit', new FormData(event.target)); event.preventDefault();"
                            >
                                <label>
                                    Name:
                                    <input name="username" />
                                </label>
                            </form>

                        </div>
                    </Card>
                </Layout.Section>
                <Layout.Section secondary>
                    <Card>

                        <div>
                            <form
                                data-save-bar
                                onsubmit="console.log('submit', new FormData(event.target)); event.preventDefault();"
                            >
                                <label>
                                    Name:
                                    <input name="username" />
                                </label>
                            </form>

                        </div>
                    </Card>
                </Layout.Section>
            </Layout>
        </Page>
    )
}
