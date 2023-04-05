import express from 'express';
import { getActiveJobs, getAvailableJobs, getAvailableJob, createAvailableJob, updateAvailableJob, createJob, triggerJob, stopJob, startAllJobs, stopAllJobs } from '../controllers/jobsController.js';
import { validateNewAvailableJob } from '../utils/validation/ValidatorUtil.js';


const jobs = express.Router();

jobs.get('/', async (req, res) => await getAvailableJobs(req, res));
jobs.post('/', validateNewAvailableJob(), async (req, res) => await createAvailableJob(req, res));
jobs.get('/:id', async (req, res) => await getAvailableJob(req, res));
jobs.patch('/:id', async (req, res) => await updateAvailableJob(req, res));

jobs.get('/active', async (req, res) => await getActiveJobs(req, res));
jobs.post('/:jobName', async (req, res) => await createJob(req, res));
jobs.get('/:jobName/trigger', async (req, res) => await triggerJob(req, res)); // When you trigger, the job should already be started
jobs.delete('/:jobName', async (req, res) => await stopJob(req, res));
jobs.delete('/delete/all', async (req, res) => await stopAllJobs(req, res));
jobs.get('/start/all', async (req, res) => await startAllJobs(req, res));

export default jobs;