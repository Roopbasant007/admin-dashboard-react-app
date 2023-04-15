import { Box, TextField, Button, useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

const Form = () => {
  const initialValues = {
    firstName: " ",
    lastName: " ",
    email: " ",
    contact: " ",
    address1: " ",
    address2: " ",
  };

  // phone no and email validator using regEx
  const phoneRegEX = /^(\([0-9]{3}\)\s*|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;

  // Schema Validation of the form
  const userSchema = yup.object().shape({
    firstName: yup.string().required("required"), // it will check that required field hasn't empt, required will be popped up if field left empty at the time of form submission
    lastName: yup.string().required("required"),
    email: yup.string().email("Email is not valid").required("required"),
    contact: yup
      .string()
      .matches(phoneRegEX, "Phone No is not valid")
      .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
  });

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues} // it basically triggers that what values a form should have initially
        validationSchema={userSchema}
      >
        {/* built in method in formik for handling events and can be used inside our form components  */}
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Box>
            <form onSubmit={handleSubmit}>
              <Box
                // gap meaning space between each item without using margin property, and gridTemplateColumns allows to split the grid into 4 section and each section will have maximum of 1 fraction and min of 0 if something pushes the elements
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                // inorder to override the some of the property of css for specific div
                sx={{
                  "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 2",
                  },
                }}
              >
                <TextField
                  fullWidth
                  varient="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  values={values.firstName}
                  name="firstName"
                  // errors and helperText will be triggered when field will be clicked and corresponding helper test will be displayed
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                ></TextField>
                <TextField
                  fullWidth
                  varient="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  values={values.lastName}
                  name="lastName"
                  // errors and helperText will be triggered when field will be clicked and corresponding helper test will be displayed
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                ></TextField>
                <TextField
                  fullWidth
                  varient="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  values={values.email}
                  name="email"
                  // errors and helperText will be triggered when field will be clicked and corresponding helper test will be displayed
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email & errors.email}
                  sx={{ gridColumn: "span 4" }}
                ></TextField>
                <TextField
                  fullWidth
                  varient="filled"
                  type="text"
                  label="Contact Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  values={values.contact}
                  name="contact"
                  // errors and helperText will be triggered when field will be clicked and corresponding helper test will be displayed
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{ gridColumn: "span 4" }}
                ></TextField>
                <TextField
                  fullWidth
                  varient="filled"
                  type="text"
                  label="Address1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  values={values.address1}
                  name="address1"
                  // errors and helperText will be triggered when field will be clicked and corresponding helper test will be displayed
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  sx={{ gridColumn: "span 4" }}
                ></TextField>
                <TextField
                  fullWidth
                  varient="filled"
                  type="text"
                  label="Address2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  values={values.address2}
                  name="address2"
                  // errors and helperText will be triggered when field will be clicked and corresponding helper test will be displayed
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  sx={{ gridColumn: "span 4" }}
                ></TextField>
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Create New User
                </Button>
              </Box>
            </form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
