import React from 'react'
import useAuth from "./useAuth"
import { Container, Form } from "react-bootstrap"

export default function Dashbord({ code }) {
    const accessToken = useAuth(code)
    return <Container>
            <Form.Control 
            type="Search" 
            placeholder="Search songs/ Artist" 
            value={search} 
            onChange={e => setSearch(e.target.value)}
        </Container>
}
