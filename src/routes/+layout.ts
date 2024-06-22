import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import type { LayoutData } from "./$types";

import { createBrowserClient, createServerClient, isBrowser, parse } from '@supabase/ssr'

export const ssr = false

export const load: LayoutData = async ({ depends, fetch, data }: any) => {
    depends('supabase:auth')

    const supabase = createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
            fetch

        },
        cookies: {
            get(key) {
                // if server, something else
                if (!isBrowser()) {
                    return JSON.stringify(data.sesssion)
                }
                // if we are on the browser, do something
                const cookie = parse(document.cookie)
                return cookie[key]
            }



        }
    })
    const {
        data: { session }
    } = await supabase.auth.getSession()

    return { supabase, session }
}