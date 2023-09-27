import React, { Component } from 'react';
import axios from 'axios';
import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Divider,
  Heading,
  Icon,
} from '@chakra-ui/react';
import { FaCodeBranch, FaUser, FaEnvelope, FaCalendar, FaComment } from 'react-icons/fa';
import { repoOwner, repoName, branchName, accessToken, apiUrl } from '../../config/githubConfig.js';  

class GitHubCommits extends Component {
  state = {
    commits: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      });

      if (response.status === 200) {
        this.setState({ commits: response.data });
      } else {
        console.error(`Erro na solicitação: Código ${response.status}`);
      }
    } catch (error) {
      console.error('Erro ao buscar os commits:', error);
    }
  }

  render() {
    const { commits } = this.state;

    return (
      <Box>
        <Heading as="h2" mb={4}>
          Commits do Repositório
        </Heading>
        <UnorderedList>
          {commits.map((commit) => (
            <ListItem key={commit.sha}>
              <Icon as={FaCodeBranch} mr={2} />
              <strong>SHA:</strong> {commit.sha}<br />
              <Icon as={FaUser} mr={2} />
              <strong>Autor:</strong> {commit.commit.author.name}<br />
              <Icon as={FaEnvelope} mr={2} />
              <strong>Email do Autor:</strong> {commit.commit.author.email}<br />
              <Icon as={FaCalendar} mr={2} />
              <strong>Data:</strong> {new Date(commit.commit.author.date).toLocaleString()}<br />
              <Icon as={FaComment} mr={2} />
              <strong>Mensagem:</strong> {commit.commit.message}<br />
              <Icon as={FaCodeBranch} mr={2} />
              <strong>URL do Commit:</strong> <Link href={commit.html_url} target="_blank" rel="noopener noreferrer">{commit.html_url}</Link><br />
              <Divider my={4} />
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    );
  }
}

export default GitHubCommits;
