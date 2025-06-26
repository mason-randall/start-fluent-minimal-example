import {createFileRoute, redirect} from "@tanstack/react-router";
import {Person5Filled} from "@fluentui/react-icons";

export const Route = createFileRoute('/')({
component: Home,
})

function Home() {
    return (
        <>
            <h1>Test</h1>
            <Person5Filled />
        </>
    )
}