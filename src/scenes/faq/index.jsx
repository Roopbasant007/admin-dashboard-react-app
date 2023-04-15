import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked question page" />
      <Accordion defaultExpanded>
        {/* defaultExpanded: means our ans for this question will be expanded by default when we will open that FAQ section*/}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            An Important Question!!!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            How to use Accordion in Reactjs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is the use of FullCalendar in Reactjs?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is event loop ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            What is scaffollding and why it is important in Reactjs Projects ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            obcaecati nemo iste beatae quidem dignissimos incidunt iusto iure,
            et architecto, quo sint eaque ullam repudiandae praesentium magni,
            voluptas adipisci enim!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
