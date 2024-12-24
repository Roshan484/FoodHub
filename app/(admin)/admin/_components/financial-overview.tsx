import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const financialData = [
  { month: "January", revenue: 125000, expenses: 80000, profit: 45000 },
  { month: "February", revenue: 145000, expenses: 90000, profit: 55000 },
  { month: "March", revenue: 165000, expenses: 100000, profit: 65000 },
  { month: "April", revenue: 185000, expenses: 110000, profit: 75000 },
];

export default function FinancialOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Expenses</TableHead>
              <TableHead>Profit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {financialData.map((item) => (
              <TableRow key={item.month}>
                <TableCell>{item.month}</TableCell>
                <TableCell>${item.revenue.toLocaleString()}</TableCell>
                <TableCell>${item.expenses.toLocaleString()}</TableCell>
                <TableCell>${item.profit.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
