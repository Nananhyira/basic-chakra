import { Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea,Box } from "@chakra-ui/react";
import { Form,redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px" bg="purple.900">
		<Form method="post" action="/create">
			<FormControl  isRequired mb="40px">
				<FormLabel >Task Name :</FormLabel>
				<Input type='text' name='title' />
				<FormHelperText >Enter a descriptive task name</FormHelperText>
			</FormControl>


      <FormControl  isRequired mb="40px">
				<FormLabel >Task Description :</FormLabel>
				<Textarea  placeholder="Enter a detailed description for the task "  name="description" borderColor="solid 2px gray.500"type='text' />
			</FormControl>

      <FormControl  display="flex" alignItems="center" mb="40px">
        <Checkbox colorScheme="purple"  name="isPriority" size="lg"/>
      <FormLabel mb="0px" ml="10px">Make this a priority task</FormLabel>
      </FormControl>

      <Button type="submit">submit</Button>
		</Form>
    </Box>
	);
}


export const createAction = async ({ request }) => {
	const data = await request.formData();

	const task = {
		title: data.get("title"),
		description: data.get("description"),
		isPriority: data.get("isPriority") === "",
	};

	console.log(task);

	return redirect("/");
};