import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Paper, Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, MenuItem, Card, CardContent, CircularProgress, Stack, Box } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [retentionFilter, setRetentionFilter] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/api/users`)
            .then(res => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching users:", err);
                setError("Failed to load data");
                setLoading(false);
            });
    }, []);

    if (loading) return <Typography variant="h6" align="center"><CircularProgress /></Typography>;
    if (error) return <Typography variant="h6" align="center" color="error">{error}</Typography>;

    // Filtered Users
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase()) &&
        (retentionFilter === "" || user.retentionCategory === retentionFilter)
    );

    // Pie Chart Data
    const retentionData = users.reduce((acc, user) => {
        acc[user.retentionCategory] = (acc[user.retentionCategory] || 0) + 1;
        return acc;
    }, {});

    const pieChartData = Object.keys(retentionData).map(key => ({
        name: key,
        value: retentionData[key]
    }));

    const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

    return (
        <Container sx={{ paddingY: 4 }}>
            {/* Dashboard Title */}
            <Typography 
                variant="h3" 
                align="center"
                fontWeight="bold"
                color="primary"
                gutterBottom
            >
                🚀 Customer Engagement Dashboard
            </Typography>

            {/* Charts Section */}
            <Stack spacing={3} direction={{ xs: "column", md: "row" }}>
                {/* Engagement Score Bar Chart */}
                <Paper sx={{ flex: 1, padding: 2 }}>
                    <Typography variant="h6" align="center" gutterBottom>Engagement Score Distribution</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={users}>
                            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={80} />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="engagementScore" fill="#3f51b5" barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </Paper>

                {/* Retention Category Pie Chart */}
                <Paper sx={{ flex: 1, padding: 2 }}>
                    <Typography variant="h6" align="center" gutterBottom>Retention Categories</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </Paper>
            </Stack>

            {/* AI Insights Section */}
            <Paper sx={{ padding: 2, marginY: 3 }}>
                <Typography variant="h6" align="center" gutterBottom>AI Insights</Typography>
                <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
                    <Card sx={{ flex: 1, bgcolor: "#e3f2fd", padding: 2 }}>
                        <CardContent>
                            <Typography variant="h6">🚀 Retention Tip:</Typography>
                            <Typography>Offer discounts to users with low engagement scores.</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ flex: 1, bgcolor: "#ffebee", padding: 2 }}>
                        <CardContent>
                            <Typography variant="h6">🔥 Feature Alert:</Typography>
                            <Typography>Users engage most with X feature, consider improving it further.</Typography>
                        </CardContent>
                    </Card>
                </Stack>
            </Paper>

            {/* Search & Filters */}
            <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ marginBottom: 2 }}>
                <TextField 
                    fullWidth 
                    label="Search User" 
                    variant="outlined" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                />
                <TextField 
                    fullWidth 
                    select 
                    label="Filter by Retention" 
                    variant="outlined" 
                    value={retentionFilter} 
                    onChange={(e) => setRetentionFilter(e.target.value)} 
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                </TextField>
            </Stack>

            {/* User Data Table */}
            <Paper sx={{ padding: 2 }}>
                <Typography variant="h6" align="center" gutterBottom>User Engagement Data</Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ bgcolor: "primary.main" }}>
                                <TableCell sx={{ color: "white" }}>Name</TableCell>
                                <TableCell sx={{ color: "white" }}>Email</TableCell>
                                <TableCell sx={{ color: "white" }}>Engagement Score</TableCell>
                                <TableCell sx={{ color: "white" }}>Retention Category</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredUsers.map(user => (
                                <TableRow key={user._id} hover>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.engagementScore}</TableCell>
                                    <TableCell>{user.retentionCategory}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
}

export default Dashboard;
