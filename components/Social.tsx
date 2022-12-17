import { HStack, Link, Center } from "@chakra-ui/react";
import NextLink from "next/link";
import { Icon } from "@chakra-ui/react";
import { FaGithubAlt, FaTwitter, FaLinkedin } from "react-icons/fa";

const Social = () => {
	return (
		<Center>
			<HStack align="flex-start" spacing={4}>
				<NextLink href="https://twitter.com/0xYurian" passHref>
					<Link isExternal>
						<Icon as={FaTwitter} boxSize={6} />
					</Link>
				</NextLink>

				<NextLink href="https://github.com/PeachBay" passHref>
					<Link isExternal>
						<Icon as={FaGithubAlt} boxSize={6} />
					</Link>
				</NextLink>

				<NextLink href="https://www.linkedin.com/in/tiffenyk/" passHref>
					<Link isExternal>
						<Icon as={FaLinkedin} boxSize={6} />
					</Link>
				</NextLink>
			</HStack>
		</Center>
	);
};

export default Social;
