import { Helmet } from 'react-helmet-async';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// sections
import {
  AppCurrentVisits,
  AppWebsiteVisits,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Temukan </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography style={{justifyContent: "flex-end"}} variant="h4" sx={{ mb: 5 }}>
          היי, כיף שחזרת
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="כמות מתמודדים פוטנציאליים"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ]}
              chartData={[
                {
                  name: 'שיטה ישנה',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'מצב עכשוי',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'פוטנציאל עתידי',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="פילוח מתמודדים לפני אזור גאוגרפי"
              chartData={[
                { label: 'שרון', value: 4344 },
                { label: 'גוש דן', value: 5435 },
                { label: 'נגב', value: 1443 },
                { label: 'גליל', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="מתמודדים לפי עיר"
              chartData={[
                { label: 'צפת', value: 10 },
                { label: 'ערד', value: 30 },
                { label: 'באר שבע', value: 80 },
                { label: 'נתניה', value: 100 },
                { label: 'חיפה', value: 120 },
                { label: 'פתח תקווה', value: 200 },
                { label: 'רמת השרון', value: 240 },
                { label: 'הוד השרון', value: 250 },
                { label: 'ראשון לציון', value: 300 },
                { label: ' תל אביב', value: 500 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="פילוח מתמדדים לפי מסגרת חברתית"
              chartLabels={['הובלה', 'התנדבות', 'יוזמה', 'ערכים', 'עצמאות', 'יצירתיות']}
              chartData={[
                { name: 'ספורטאים', data: [80, 50, 30, 40, 100, 20] },
                { name: 'אושויות רשת', data: [20, 30, 40, 80, 20, 80] },
                { name: 'תנועות נוער', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>


        </Grid>
      </Container>
    </>
  );
}