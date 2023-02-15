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
              title="מציאת מתמודדים"
              subheader="(+43%) יותר משנה שעברה"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: '\'קבוצה א',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: '\'קבוצה ב',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: '\'קבוצה ג',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="פילוח מתמודדים"
              chartData={[
                { label: 'איכותי', value: 4344 },
                { label: 'מיוחדים', value: 5435 },
                { label: 'בדיקה', value: 1443 },
                { label: 'פוטנציאל', value: 4443 },
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
              subheader="(+83%) משנה שעברה"
              chartData={[
                { label: 'יהוד', value: 400 },
                { label: 'ירושלים', value: 430 },
                { label: 'קסריה', value: 448 },
                { label: 'נתניה', value: 470 },
                { label: 'חיפה', value: 540 },
                { label: 'אילת', value: 580 },
                { label: 'ראש פינה', value: 690 },
                { label: 'צפת', value: 1100 },
                { label: 'ערד', value: 1200 },
                { label: 'רמת ישי', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>


        </Grid>
      </Container>
    </>
  );
}