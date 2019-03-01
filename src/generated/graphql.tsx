export type Maybe<T> = T | null;

/** Ordering options for organization connections. */
export interface OrganizationOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order organizations by. */
  field: OrganizationOrderField;
}
/** Ordering options for user status connections. */
export interface UserStatusOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order user statuses by. */
  field: UserStatusOrderField;
}
/** Ways in which to filter lists of issues. */
export interface IssueFilters {
  /** List issues assigned to given name. Pass in `null` for issues with no assigned user, and `*` for issues assigned to any user. */
  assignee?: Maybe<string>;
  /** List issues created by given name. */
  createdBy?: Maybe<string>;
  /** List issues where the list of label names exist on the issue. */
  labels?: Maybe<string[]>;
  /** List issues where the given name is mentioned in the issue. */
  mentioned?: Maybe<string>;
  /** List issues by given milestone argument. If an string representation of an integer is passed, it should refer to a milestone by its number field. Pass in `null` for issues with no milestone, and `*` for issues that are assigned to any milestone. */
  milestone?: Maybe<string>;
  /** List issues that have been updated at or after the given date. */
  since?: Maybe<DateTime>;
  /** List issues filtered by the list of states given. */
  states?: Maybe<IssueState[]>;
  /** List issues subscribed to by viewer. */
  viewerSubscribed?: boolean;
}
/** Ways in which lists of issues can be ordered upon return. */
export interface IssueOrder {
  /** The direction in which to order issues by the specified field. */
  direction: OrderDirection;
  /** The field in which to order issues by. */
  field: IssueOrderField;
}
/** Ways in which lists of reactions can be ordered upon return. */
export interface ReactionOrder {
  /** The direction in which to order reactions by the specified field. */
  direction: OrderDirection;
  /** The field in which to order reactions by. */
  field: ReactionOrderField;
}
/** Ordering options for repository connections */
export interface RepositoryOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order repositories by. */
  field: RepositoryOrderField;
}
/** Ways in which star connections can be ordered. */
export interface StarOrder {
  /** The direction in which to order nodes. */
  direction: OrderDirection;
  /** The field in which to order nodes by. */
  field: StarOrderField;
}
/** Ways in which team connections can be ordered. */
export interface TeamOrder {
  /** The direction in which to order nodes. */
  direction: OrderDirection;
  /** The field in which to order nodes by. */
  field: TeamOrderField;
}
/** Ways in which team discussion comment connections can be ordered. */
export interface TeamDiscussionCommentOrder {
  /** The direction in which to order nodes. */
  direction: OrderDirection;
  /** The field by which to order nodes. */
  field: TeamDiscussionCommentOrderField;
}
/** Ways in which team discussion connections can be ordered. */
export interface TeamDiscussionOrder {
  /** The direction in which to order nodes. */
  direction: OrderDirection;
  /** The field by which to order nodes. */
  field: TeamDiscussionOrderField;
}
/** Ordering options for team member connections */
export interface TeamMemberOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order team members by. */
  field: TeamMemberOrderField;
}
/** Ordering options for team repository connections */
export interface TeamRepositoryOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order repositories by. */
  field: TeamRepositoryOrderField;
}
/** The filters that are available when fetching check suites. */
export interface CheckSuiteFilter {
  /** Filters the check suites created by this application ID. */
  appId?: Maybe<number>;
  /** Filters the check suites by this name. */
  checkName?: Maybe<string>;
}
/** The filters that are available when fetching check runs. */
export interface CheckRunFilter {
  /** Filters the check runs created by this application ID. */
  appId?: Maybe<number>;
  /** Filters the check runs by this name. */
  checkName?: Maybe<string>;
  /** Filters the check runs by this type. */
  checkType?: Maybe<CheckRunType>;
  /** Filters the check runs by this status. */
  status?: Maybe<CheckStatusState>;
}
/** Ordering options for deployment connections */
export interface DeploymentOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order deployments by. */
  field: DeploymentOrderField;
}
/** Specifies an author for filtering Git commits. */
export interface CommitAuthor {
  /** Email addresses to filter by. Commits authored by any of the specified email addresses will be returned. */
  emails?: Maybe<string[]>;
  /** ID of a User to filter by. If non-null, only commits authored by this user will be returned. This field takes precedence over emails. */
  id?: Maybe<string>;
}
/** Ordering options for language connections. */
export interface LanguageOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order languages by. */
  field: LanguageOrderField;
}
/** Ordering options for milestone connections. */
export interface MilestoneOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order milestones by. */
  field: MilestoneOrderField;
}
/** Ways in which lists of projects can be ordered upon return. */
export interface ProjectOrder {
  /** The direction in which to order projects by the specified field. */
  direction: OrderDirection;
  /** The field in which to order projects by. */
  field: ProjectOrderField;
}
/** Ways in which lists of git refs can be ordered upon return. */
export interface RefOrder {
  /** The direction in which to order refs by the specified field. */
  direction: OrderDirection;
  /** The field in which to order refs by. */
  field: RefOrderField;
}
/** Ways in which lists of releases can be ordered upon return. */
export interface ReleaseOrder {
  /** The direction in which to order releases by the specified field. */
  direction: OrderDirection;
  /** The field in which to order releases by. */
  field: ReleaseOrderField;
}
/** Ordering options for security vulnerability connections */
export interface SecurityVulnerabilityOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order security vulnerabilities by. */
  field: SecurityVulnerabilityOrderField;
}
/** Ordering options for commit contribution connections. */
export interface CommitContributionOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field by which to order commit contributions. */
  field: CommitContributionOrderField;
}
/** Ordering options for contribution connections. */
export interface ContributionOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field by which to order contributions. */
  field: ContributionOrderField;
}
/** Ordering options for gist connections */
export interface GistOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order repositories by. */
  field: GistOrderField;
}
/** Ordering options for business member connections */
export interface BusinessMemberOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order business members by. */
  field: BusinessMemberOrderField;
}
/** An advisory identifier to filter results on. */
export interface SecurityAdvisoryIdentifierFilter {
  /** The identifier type. */
  type: SecurityAdvisoryIdentifierType;
  /** The identifier string. Supports exact or partial matching. */
  value: string;
}
/** Ordering options for security advisory connections */
export interface SecurityAdvisoryOrder {
  /** The ordering direction. */
  direction: OrderDirection;
  /** The field to order security advisories by. */
  field: SecurityAdvisoryOrderField;
}
/** Autogenerated input type of AcceptBusinessMemberInvitation */
export interface AcceptBusinessMemberInvitationInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The id of the invitation being accepted */
  invitationId: string;
}
/** Autogenerated input type of AcceptTopicSuggestion */
export interface AcceptTopicSuggestionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of the suggested topic. */
  name: string;
  /** The Node ID of the repository. */
  repositoryId: string;
}
/** Autogenerated input type of AddAssigneesToAssignable */
export interface AddAssigneesToAssignableInput {
  /** The id of the assignable object to add assignees to. */
  assignableId: string;
  /** The id of users to add as assignees. */
  assigneeIds: string[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of AddComment */
export interface AddCommentInput {
  /** The contents of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the subject to modify. */
  subjectId: string;
}
/** Autogenerated input type of AddLabelsToLabelable */
export interface AddLabelsToLabelableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ids of the labels to add. */
  labelIds: string[];
  /** The id of the labelable object to add labels to. */
  labelableId: string;
}
/** Autogenerated input type of AddProjectCard */
export interface AddProjectCardInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The content of the card. Must be a member of the ProjectCardItem union */
  contentId?: Maybe<string>;
  /** The note on the card. */
  note?: Maybe<string>;
  /** The Node ID of the ProjectColumn. */
  projectColumnId: string;
}
/** Autogenerated input type of AddProjectColumn */
export interface AddProjectColumnInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of the column. */
  name: string;
  /** The Node ID of the project. */
  projectId: string;
}
/** Autogenerated input type of AddPullRequestReview */
export interface AddPullRequestReviewInput {
  /** The contents of the review body comment. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The review line comments. */
  comments?: Maybe<(Maybe<DraftPullRequestReviewComment>)[]>;
  /** The commit OID the review pertains to. */
  commitOID?: Maybe<GitObjectId>;
  /** The event to perform on the pull request review. */
  event?: Maybe<PullRequestReviewEvent>;
  /** The Node ID of the pull request to modify. */
  pullRequestId: string;
}
/** Specifies a review comment to be left with a Pull Request Review. */
export interface DraftPullRequestReviewComment {
  /** Body of the comment to leave. */
  body: string;
  /** Path to the file being commented on. */
  path: string;
  /** Position in the file to leave a comment on. */
  position: number;
}
/** Autogenerated input type of AddPullRequestReviewComment */
export interface AddPullRequestReviewCommentInput {
  /** The text of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The SHA of the commit to comment on. */
  commitOID?: Maybe<GitObjectId>;
  /** The comment id to reply to. */
  inReplyTo?: Maybe<string>;
  /** The relative path of the file to comment on. */
  path?: Maybe<string>;
  /** The line index in the diff to comment on. */
  position?: Maybe<number>;
  /** The Node ID of the review to modify. */
  pullRequestReviewId: string;
}
/** Autogenerated input type of AddReaction */
export interface AddReactionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of the emoji to react with. */
  content: ReactionContent;
  /** The Node ID of the subject to modify. */
  subjectId: string;
}
/** Autogenerated input type of AddStar */
export interface AddStarInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Starrable ID to star. */
  starrableId: string;
}
/** Autogenerated input type of CancelBusinessAdminInvitation */
export interface CancelBusinessAdminInvitationInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the pending business admin invitation. */
  invitationId: string;
}
/** Autogenerated input type of CancelBusinessBillingManagerInvitation */
export interface CancelBusinessBillingManagerInvitationInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the pending business billing manager invitation. */
  invitationId: string;
}
/** Autogenerated input type of ChangeUserStatus */
export interface ChangeUserStatusInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The emoji to represent your status. Can either be a native Unicode emoji or an emoji name with colons, e.g., :grinning:. */
  emoji?: Maybe<string>;
  /** Whether this status should indicate you are not fully available on GitHub, e.g., you are away. */
  limitedAvailability?: boolean;
  /** A short description of your current status. */
  message?: Maybe<string>;
  /** The ID of the organization whose members will be allowed to see the status. If omitted, the status will be publicly visible. */
  organizationId?: Maybe<string>;
}
/** Autogenerated input type of ClearLabelsFromLabelable */
export interface ClearLabelsFromLabelableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The id of the labelable object to clear the labels from. */
  labelableId: string;
}
/** Autogenerated input type of CloseIssue */
export interface CloseIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** ID of the issue to be closed. */
  issueId: string;
}
/** Autogenerated input type of ClosePullRequest */
export interface ClosePullRequestInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** ID of the pull request to be closed. */
  pullRequestId: string;
}
/** Autogenerated input type of ConvertProjectCardNoteToIssue */
export interface ConvertProjectCardNoteToIssueInput {
  /** The body of the newly created issue. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ProjectCard ID to convert. */
  projectCardId: string;
  /** The ID of the repository to create the issue in. */
  repositoryId: string;
  /** The title of the newly created issue. Defaults to the card's note text. */
  title?: Maybe<string>;
}
/** Autogenerated input type of CreateBranchProtectionRule */
export interface CreateBranchProtectionRuleInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<boolean>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<boolean>;
  /** The glob-like pattern used to determine matching branches. */
  pattern: string;
  /** A list of User or Team IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<string[]>;
  /** The global relay id of the repository in which a new branch protection rule should be created in. */
  repositoryId: string;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<number>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<string[]>;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<boolean>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<boolean>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<boolean>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<boolean>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<boolean>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<boolean>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<boolean>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<string[]>;
}
/** Autogenerated input type of CreateCheckRun */
export interface CreateCheckRunInput {
  /** Possible further actions the integrator can perform, which a user may trigger. */
  actions?: Maybe<CheckRunAction[]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The time that the check run finished. */
  completedAt?: Maybe<DateTime>;
  /** The final conclusion of the check. */
  conclusion?: Maybe<CheckConclusionState>;
  /** The URL of the integrator's site that has the full details of the check. */
  detailsUrl?: Maybe<Uri>;
  /** A reference for the run on the integrator's system. */
  externalId?: Maybe<string>;
  /** The SHA of the head commit. */
  headSha: GitObjectId;
  /** The name of the check. */
  name: string;
  /** Descriptive details about the run. */
  output?: Maybe<CheckRunOutput>;
  /** The node ID of the repository. */
  repositoryId: string;
  /** The time that the check run began. */
  startedAt?: Maybe<DateTime>;
  /** The current status. */
  status?: Maybe<RequestableCheckStatusState>;
}
/** Possible further actions the integrator can perform. */
export interface CheckRunAction {
  /** A short explanation of what this action would do. */
  description: string;
  /** A reference for the action on the integrator's system. */
  identifier: string;
  /** The text to be displayed on a button in the web UI. */
  label: string;
}
/** Descriptive details about the check run. */
export interface CheckRunOutput {
  /** The annotations that are made as part of the check run. */
  annotations?: Maybe<CheckAnnotationData[]>;
  /** Images attached to the check run output displayed in the GitHub pull request UI. */
  images?: Maybe<CheckRunOutputImage[]>;
  /** The summary of the check run (supports Commonmark). */
  summary: string;
  /** The details of the check run (supports Commonmark). */
  text?: Maybe<string>;
  /** A title to provide for this check run. */
  title: string;
}
/** Information from a check run analysis to specific lines of code. */
export interface CheckAnnotationData {
  /** Represents an annotation's information level */
  annotationLevel: CheckAnnotationLevel;
  /** The location of the annotation */
  location: CheckAnnotationRange;
  /** A short description of the feedback for these lines of code. */
  message: string;
  /** The path of the file to add an annotation to. */
  path: string;
  /** Details about this annotation. */
  rawDetails?: Maybe<string>;
  /** The title that represents the annotation. */
  title?: Maybe<string>;
}
/** Information from a check run analysis to specific lines of code. */
export interface CheckAnnotationRange {
  /** The ending column of the range. */
  endColumn?: Maybe<number>;
  /** The ending line of the range. */
  endLine: number;
  /** The starting column of the range. */
  startColumn?: Maybe<number>;
  /** The starting line of the range. */
  startLine: number;
}
/** Images attached to the check run output displayed in the GitHub pull request UI. */
export interface CheckRunOutputImage {
  /** The alternative text for the image. */
  alt: string;
  /** A short image description. */
  caption?: Maybe<string>;
  /** The full URL of the image. */
  imageUrl: Uri;
}
/** Autogenerated input type of CreateCheckSuite */
export interface CreateCheckSuiteInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The SHA of the head commit. */
  headSha: GitObjectId;
  /** The Node ID of the repository. */
  repositoryId: string;
}
/** Autogenerated input type of CreateContentAttachment */
export interface CreateContentAttachmentInput {
  /** The body of the content attachment, which may contain markdown. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The node ID of the content_reference. */
  contentReferenceId: string;
  /** The title of the content attachment. */
  title: string;
}
/** Autogenerated input type of CreateDeployment */
export interface CreateDeploymentInput {
  /** Attempt to automatically merge the default branch into the requested ref, defaults to true. */
  autoMerge?: boolean;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** Short description of the deployment. */
  description?: string;
  /** Name for the target deployment environment. */
  environment?: string;
  /** JSON payload with extra information about the deployment. */
  payload?: string;
  /** The node ID of the ref to be deployed. */
  refId: string;
  /** The node ID of the repository. */
  repositoryId: string;
  /** The status contexts to verify against commit status checks. To bypass required contexts, pass an empty array. Defaults to all unique contexts. */
  requiredContexts?: Maybe<string[]>;
  /** Specifies a task to execute. */
  task?: string;
}
/** Autogenerated input type of CreateDeploymentStatus */
export interface CreateDeploymentStatusInput {
  /** Adds a new inactive status to all non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. */
  autoInactive?: boolean;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The node ID of the deployment. */
  deploymentId: string;
  /** A short description of the status. Maximum length of 140 characters. */
  description?: string;
  /** If provided, updates the environment of the deploy. Otherwise, does not modify the environment. */
  environment?: Maybe<string>;
  /** Sets the URL for accessing your environment. */
  environmentUrl?: string;
  /** The log URL to associate with this status.       This URL should contain output to keep the user updated while the task is running       or serve as historical information for what happened in the deployment. */
  logUrl?: string;
  /** The state of the deployment. */
  state: DeploymentStatusState;
}
/** Autogenerated input type of CreateIssue */
export interface CreateIssueInput {
  /** The Node ID for the user assignee for this issue. */
  assigneeIds?: Maybe<string[]>;
  /** The body for the issue description. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<string[]>;
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<string>;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<string[]>;
  /** The Node ID of the repository. */
  repositoryId: string;
  /** The title for the issue. */
  title: string;
}
/** Autogenerated input type of CreateLabel */
export interface CreateLabelInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** A 6 character hex code, without the leading #, identifying the color of the label. */
  color: string;
  /** The name of the label. */
  name: string;
  /** The Node ID of the repository. */
  repositoryId: string;
}
/** Autogenerated input type of CreateProject */
export interface CreateProjectInput {
  /** The description of project. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of project. */
  name: string;
  /** The owner ID to create the project under. */
  ownerId: string;
}
/** Autogenerated input type of CreatePullRequest */
export interface CreatePullRequestInput {
  /** The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository. */
  baseRefName: string;
  /** The contents of the pull request. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** Indicates whether this pull request should be a draft. */
  draft?: boolean;
  /** The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head_ref_name` with a user like this: `username:branch`. */
  headRefName: string;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: boolean;
  /** The Node ID of the repository. */
  repositoryId: string;
  /** The title of the pull request. */
  title: string;
}
/** Autogenerated input type of CreateTeamDiscussion */
export interface CreateTeamDiscussionInput {
  /** The content of the discussion. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** If true, restricts the visiblity of this discussion to team members and organization admins. If false or not specified, allows any organization member to view this discussion. */
  private?: Maybe<boolean>;
  /** The ID of the team to which the discussion belongs. */
  teamId: string;
  /** The title of the discussion. */
  title: string;
}
/** Autogenerated input type of CreateTeamDiscussionComment */
export interface CreateTeamDiscussionCommentInput {
  /** The content of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the discussion to which the comment belongs. */
  discussionId: string;
}
/** Autogenerated input type of DeclineTopicSuggestion */
export interface DeclineTopicSuggestionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of the suggested topic. */
  name: string;
  /** The reason why the suggested topic is declined. */
  reason: TopicSuggestionDeclineReason;
  /** The Node ID of the repository. */
  repositoryId: string;
}
/** Autogenerated input type of DeleteBranchProtectionRule */
export interface DeleteBranchProtectionRuleInput {
  /** The global relay id of the branch protection rule to be deleted. */
  branchProtectionRuleId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeleteIssue */
export interface DeleteIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the issue to delete. */
  issueId: string;
}
/** Autogenerated input type of DeleteIssueComment */
export interface DeleteIssueCommentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the comment to delete. */
  id: string;
}
/** Autogenerated input type of DeleteLabel */
export interface DeleteLabelInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the label to be deleted. */
  id: string;
}
/** Autogenerated input type of DeleteProject */
export interface DeleteProjectInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Project ID to update. */
  projectId: string;
}
/** Autogenerated input type of DeleteProjectCard */
export interface DeleteProjectCardInput {
  /** The id of the card to delete. */
  cardId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of DeleteProjectColumn */
export interface DeleteProjectColumnInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The id of the column to delete. */
  columnId: string;
}
/** Autogenerated input type of DeletePullRequestReview */
export interface DeletePullRequestReviewInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the pull request review to delete. */
  pullRequestReviewId: string;
}
/** Autogenerated input type of DeletePullRequestReviewComment */
export interface DeletePullRequestReviewCommentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the comment to delete. */
  id: string;
}
/** Autogenerated input type of DeleteTeamDiscussion */
export interface DeleteTeamDiscussionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The discussion ID to delete. */
  id: string;
}
/** Autogenerated input type of DeleteTeamDiscussionComment */
export interface DeleteTeamDiscussionCommentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the comment to delete. */
  id: string;
}
/** Autogenerated input type of DismissPullRequestReview */
export interface DismissPullRequestReviewInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The contents of the pull request review dismissal message. */
  message: string;
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: string;
}
/** Autogenerated input type of ImportProject */
export interface ImportProjectInput {
  /** The description of Project. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** A list of columns containing issues and pull requests. */
  columnImports: ProjectColumnImport[];
  /** The name of Project. */
  name: string;
  /** The name of the Organization or User to create the Project under. */
  ownerName: string;
  /** Whether the Project is public or not. */
  public?: boolean;
}
/** A project column and a list of its issues and PRs. */
export interface ProjectColumnImport {
  /** The name of the column. */
  columnName: string;
  /** A list of issues and pull requests in the column. */
  issues?: Maybe<ProjectCardImport[]>;
  /** The position of the column, starting from 0. */
  position: number;
}
/** An issue or PR and its owning repository to be used in a project card. */
export interface ProjectCardImport {
  /** The issue or pull request number. */
  number: number;
  /** Repository name with owner (owner/repository). */
  repository: string;
}
/** Autogenerated input type of InviteBusinessAdmin */
export interface InviteBusinessAdminInput {
  /** The ID of the business to which you want to invite an administrator. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The email of the person to invite as an administrator. */
  email?: Maybe<string>;
  /** The login of a user to invite as an administrator. */
  invitee?: Maybe<string>;
}
/** Autogenerated input type of InviteBusinessBillingManager */
export interface InviteBusinessBillingManagerInput {
  /** The ID of the business to which you want to invite a billing manager. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The email of the person to invite as a billing manager. */
  email?: Maybe<string>;
  /** The login of a user to invite as a billing manager. */
  invitee?: Maybe<string>;
}
/** Autogenerated input type of LockLockable */
export interface LockLockableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** A reason for why the issue or pull request will be locked. */
  lockReason?: Maybe<LockReason>;
  /** ID of the issue or pull request to be locked. */
  lockableId: string;
}
/** Autogenerated input type of MarkPullRequestReadyForReview */
export interface MarkPullRequestReadyForReviewInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** ID of the pull request to be marked as ready for review. */
  pullRequestId: string;
}
/** Autogenerated input type of MergePullRequest */
export interface MergePullRequestInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** Commit body to use for the merge commit; if omitted, a default message will be used */
  commitBody?: Maybe<string>;
  /** Commit headline to use for the merge commit; if omitted, a default message will be used. */
  commitHeadline?: Maybe<string>;
  /** OID that the pull request head ref must match to allow merge; if omitted, no check is performed. */
  expectedHeadOid?: Maybe<GitObjectId>;
  /** ID of the pull request to be merged. */
  pullRequestId: string;
}
/** Autogenerated input type of MinimizeComment */
export interface MinimizeCommentInput {
  /** The classification of comment */
  classifier: ReportedContentClassifiers;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the subject to modify. */
  subjectId: string;
}
/** Autogenerated input type of MoveProjectCard */
export interface MoveProjectCardInput {
  /** Place the new card after the card with this id. Pass null to place it at the top. */
  afterCardId?: Maybe<string>;
  /** The id of the card to move. */
  cardId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The id of the column to move it into. */
  columnId: string;
}
/** Autogenerated input type of MoveProjectColumn */
export interface MoveProjectColumnInput {
  /** Place the new column after the column with this id. Pass null to place it at the front. */
  afterColumnId?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The id of the column to move. */
  columnId: string;
}
/** Autogenerated input type of PinIssue */
export interface PinIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the issue to be pinned */
  issueId: string;
}
/** Autogenerated input type of RegenerateBusinessIdentityProviderRecoveryCodes */
export interface RegenerateBusinessIdentityProviderRecoveryCodesInput {
  /** The ID of the business on which to set an Identity Provider. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of RemoveAssigneesFromAssignable */
export interface RemoveAssigneesFromAssignableInput {
  /** The id of the assignable object to remove assignees from. */
  assignableId: string;
  /** The id of users to remove as assignees. */
  assigneeIds: string[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of RemoveBusinessAdmin */
export interface RemoveBusinessAdminInput {
  /** The Business ID to update. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The login of the user to add as an admin. */
  login: string;
}
/** Autogenerated input type of RemoveBusinessBillingManager */
export interface RemoveBusinessBillingManagerInput {
  /** The Business ID to update. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The login of the user to add as a billing manager. */
  login: string;
}
/** Autogenerated input type of RemoveBusinessIdentityProvider */
export interface RemoveBusinessIdentityProviderInput {
  /** The ID of the business from which to remove the Identity Provider. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
}
/** Autogenerated input type of RemoveLabelsFromLabelable */
export interface RemoveLabelsFromLabelableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ids of labels to remove. */
  labelIds: string[];
  /** The id of the Labelable to remove labels from. */
  labelableId: string;
}
/** Autogenerated input type of RemoveOutsideCollaborator */
export interface RemoveOutsideCollaboratorInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the organization to remove the outside collaborator from. */
  organizationId: string;
  /** The ID of the outside collaborator to remove. */
  userId: string;
}
/** Autogenerated input type of RemoveReaction */
export interface RemoveReactionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of the emoji reaction to remove. */
  content: ReactionContent;
  /** The Node ID of the subject to modify. */
  subjectId: string;
}
/** Autogenerated input type of RemoveStar */
export interface RemoveStarInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Starrable ID to unstar. */
  starrableId: string;
}
/** Autogenerated input type of ReopenIssue */
export interface ReopenIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** ID of the issue to be opened. */
  issueId: string;
}
/** Autogenerated input type of ReopenPullRequest */
export interface ReopenPullRequestInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** ID of the pull request to be reopened. */
  pullRequestId: string;
}
/** Autogenerated input type of RequestReviews */
export interface RequestReviewsInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the pull request to modify. */
  pullRequestId: string;
  /** The Node IDs of the team to request. */
  teamIds?: Maybe<string[]>;
  /** Add users to the set rather than replace. */
  union?: Maybe<boolean>;
  /** The Node IDs of the user to request. */
  userIds?: Maybe<string[]>;
}
/** Autogenerated input type of RerequestCheckSuite */
export interface RerequestCheckSuiteInput {
  /** The Node ID of the check suite. */
  checkSuiteId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the repository. */
  repositoryId: string;
}
/** Autogenerated input type of ResolveReviewThread */
export interface ResolveReviewThreadInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the thread to resolve */
  threadId: string;
}
/** Autogenerated input type of SetBusinessIdentityProvider */
export interface SetBusinessIdentityProviderInput {
  /** The ID of the business on which to set an Identity Provider. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The digest algorithm used to sign SAML requests for the Identity Provider. */
  digestMethod: SamlDigestAlgorithm;
  /** The x509 certificate used by the Identity Provider to sign assertions and responses. */
  idpCertificate: string;
  /** The Issuer Entity ID for the SAML Identity Provider */
  issuer?: Maybe<string>;
  /** The signature algorithm used to sign SAML requests for the Identity Provider. */
  signatureMethod: SamlSignatureAlgorithm;
  /** The URL endpoint for the Identity Provider's SAML SSO. */
  ssoUrl: Uri;
}
/** Autogenerated input type of SubmitPullRequestReview */
export interface SubmitPullRequestReviewInput {
  /** The text field to set on the Pull Request Review. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The event to send to the Pull Request Review. */
  event: PullRequestReviewEvent;
  /** The Pull Request Review ID to submit. */
  pullRequestReviewId: string;
}
/** Autogenerated input type of UnlockLockable */
export interface UnlockLockableInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** ID of the issue or pull request to be unlocked. */
  lockableId: string;
}
/** Autogenerated input type of UnmarkIssueAsDuplicate */
export interface UnmarkIssueAsDuplicateInput {
  /** ID of the issue or pull request currently considered canonical/authoritative/original. */
  canonicalId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** ID of the issue or pull request currently marked as a duplicate. */
  duplicateId: string;
}
/** Autogenerated input type of UnminimizeComment */
export interface UnminimizeCommentInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the subject to modify. */
  subjectId: string;
}
/** Autogenerated input type of UnpinIssue */
export interface UnpinIssueInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the issue to be unpinned */
  issueId: string;
}
/** Autogenerated input type of UnresolveReviewThread */
export interface UnresolveReviewThreadInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the thread to unresolve */
  threadId: string;
}
/** Autogenerated input type of UpdateBranchProtectionRule */
export interface UpdateBranchProtectionRuleInput {
  /** The global relay id of the branch protection rule to be updated. */
  branchProtectionRuleId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  dismissesStaleReviews?: Maybe<boolean>;
  /** Can admins overwrite branch protection. */
  isAdminEnforced?: Maybe<boolean>;
  /** The glob-like pattern used to determine matching branches. */
  pattern?: Maybe<string>;
  /** A list of User or Team IDs allowed to push to matching branches. */
  pushActorIds?: Maybe<string[]>;
  /** Number of approving reviews required to update matching branches. */
  requiredApprovingReviewCount?: Maybe<number>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  requiredStatusCheckContexts?: Maybe<string[]>;
  /** Are approving reviews required to update matching branches. */
  requiresApprovingReviews?: Maybe<boolean>;
  /** Are reviews from code owners required to update matching branches. */
  requiresCodeOwnerReviews?: Maybe<boolean>;
  /** Are commits required to be signed. */
  requiresCommitSignatures?: Maybe<boolean>;
  /** Are status checks required to update matching branches. */
  requiresStatusChecks?: Maybe<boolean>;
  /** Are branches required to be up to date before merging. */
  requiresStrictStatusChecks?: Maybe<boolean>;
  /** Is pushing to matching branches restricted. */
  restrictsPushes?: Maybe<boolean>;
  /** Is dismissal of pull request reviews restricted. */
  restrictsReviewDismissals?: Maybe<boolean>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  reviewDismissalActorIds?: Maybe<string[]>;
}
/** Autogenerated input type of UpdateBusinessAllowPrivateRepositoryForkingSetting */
export interface UpdateBusinessAllowPrivateRepositoryForkingSettingInput {
  /** The ID of the business on which to set the allow private repository forking setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the allow private repository forking setting on the business. */
  settingValue: BusinessEnabledDisabledSettingValue;
}
/** Autogenerated input type of UpdateBusinessDefaultRepositoryPermissionSetting */
export interface UpdateBusinessDefaultRepositoryPermissionSettingInput {
  /** The ID of the business on which to set the default repository permission setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the default repository permission setting on the business. */
  settingValue: BusinessDefaultRepositoryPermissionSettingValue;
}
/** Autogenerated input type of UpdateBusinessMembersCanChangeRepositoryVisibilitySetting */
export interface UpdateBusinessMembersCanChangeRepositoryVisibilitySettingInput {
  /** The ID of the business on which to set the members can change repository visibility setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the members can change repository visibility setting on the business. */
  settingValue: BusinessEnabledDisabledSettingValue;
}
/** Autogenerated input type of UpdateBusinessMembersCanCreateRepositoriesSetting */
export interface UpdateBusinessMembersCanCreateRepositoriesSettingInput {
  /** The ID of the business on which to set the members can create repositories setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the members can create repositories setting on the business. */
  settingValue: BusinessMembersCanCreateRepositoriesSettingValue;
}
/** Autogenerated input type of UpdateBusinessMembersCanDeleteIssuesSetting */
export interface UpdateBusinessMembersCanDeleteIssuesSettingInput {
  /** The ID of the business on which to set the members can delete issues setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the members can delete issues setting on the business. */
  settingValue: BusinessEnabledDisabledSettingValue;
}
/** Autogenerated input type of UpdateBusinessMembersCanDeleteRepositoriesSetting */
export interface UpdateBusinessMembersCanDeleteRepositoriesSettingInput {
  /** The ID of the business on which to set the members can delete repositories setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the members can delete repositories setting on the business. */
  settingValue: BusinessEnabledDisabledSettingValue;
}
/** Autogenerated input type of UpdateBusinessMembersCanInviteCollaboratorsSetting */
export interface UpdateBusinessMembersCanInviteCollaboratorsSettingInput {
  /** The ID of the business on which to set the members can invite collaborators setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the members can invite collaborators setting on the business. */
  settingValue: BusinessEnabledDisabledSettingValue;
}
/** Autogenerated input type of UpdateBusinessMembersCanUpdateProtectedBranchesSetting */
export interface UpdateBusinessMembersCanUpdateProtectedBranchesSettingInput {
  /** The ID of the business on which to set the members can update protected branches setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the members can update protected branches setting on the business. */
  settingValue: BusinessEnabledDisabledSettingValue;
}
/** Autogenerated input type of UpdateBusinessOrganizationProjectsSetting */
export interface UpdateBusinessOrganizationProjectsSettingInput {
  /** The ID of the business on which to set the organization projects setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the organization projects setting on the business. */
  settingValue: BusinessEnabledDisabledSettingValue;
}
/** Autogenerated input type of UpdateBusinessProfile */
export interface UpdateBusinessProfileInput {
  /** The Business ID to update. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The description of the business. */
  description?: Maybe<string>;
  /** The location of the business */
  location?: Maybe<string>;
  /** The name of business. */
  name?: Maybe<string>;
  /** The URL of the business's website */
  websiteUrl?: Maybe<string>;
}
/** Autogenerated input type of UpdateBusinessRepositoryProjectsSetting */
export interface UpdateBusinessRepositoryProjectsSettingInput {
  /** The ID of the business on which to set the repository projects setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the repository projects setting on the business. */
  settingValue: BusinessEnabledDisabledSettingValue;
}
/** Autogenerated input type of UpdateBusinessTeamDiscussionsSetting */
export interface UpdateBusinessTeamDiscussionsSettingInput {
  /** The ID of the business on which to set the team discussions setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the team discussions setting on the business. */
  settingValue: BusinessEnabledDisabledSettingValue;
}
/** Autogenerated input type of UpdateBusinessTwoFactorAuthenticationRequiredSetting */
export interface UpdateBusinessTwoFactorAuthenticationRequiredSettingInput {
  /** The ID of the business on which to set the two factor authentication required setting. */
  businessId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The value for the two factor authentication required setting on the business. */
  settingValue: BusinessEnabledSettingValue;
}
/** Autogenerated input type of UpdateCheckRun */
export interface UpdateCheckRunInput {
  /** Possible further actions the integrator can perform, which a user may trigger. */
  actions?: Maybe<CheckRunAction[]>;
  /** The node of the check. */
  checkRunId: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The time that the check run finished. */
  completedAt?: Maybe<DateTime>;
  /** The final conclusion of the check. */
  conclusion?: Maybe<CheckConclusionState>;
  /** The URL of the integrator's site that has the full details of the check. */
  detailsUrl?: Maybe<Uri>;
  /** A reference for the run on the integrator's system. */
  externalId?: Maybe<string>;
  /** The name of the check. */
  name?: Maybe<string>;
  /** Descriptive details about the run. */
  output?: Maybe<CheckRunOutput>;
  /** The node ID of the repository. */
  repositoryId: string;
  /** The time that the check run began. */
  startedAt?: Maybe<DateTime>;
  /** The current status. */
  status?: Maybe<RequestableCheckStatusState>;
}
/** Autogenerated input type of UpdateCheckSuitePreferences */
export interface UpdateCheckSuitePreferencesInput {
  /** The check suite preferences to modify. */
  autoTriggerPreferences: CheckSuiteAutoTriggerPreference[];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the repository. */
  repositoryId: string;
}
/** The auto-trigger preferences that are available for check suites. */
export interface CheckSuiteAutoTriggerPreference {
  /** The node ID of the application that owns the check suite. */
  appId: string;
  /** Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository. */
  setting: boolean;
}
/** Autogenerated input type of UpdateIssue */
export interface UpdateIssueInput {
  /** An array of Node IDs of users for this issue. */
  assigneeIds?: Maybe<string[]>;
  /** The body for the issue description. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the Issue to modify. */
  id: string;
  /** An array of Node IDs of labels for this issue. */
  labelIds?: Maybe<string[]>;
  /** The Node ID of the milestone for this issue. */
  milestoneId?: Maybe<string>;
  /** An array of Node IDs for projects associated with this issue. */
  projectIds?: Maybe<string[]>;
  /** The desired issue state. */
  state?: Maybe<IssueState>;
  /** The title for the issue. */
  title?: Maybe<string>;
}
/** Autogenerated input type of UpdateIssueComment */
export interface UpdateIssueCommentInput {
  /** The updated text of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the IssueComment to modify. */
  id: string;
}
/** Autogenerated input type of UpdateLabel */
export interface UpdateLabelInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** A 6 character hex code, without the leading #, identifying the updated color of the label. */
  color?: Maybe<string>;
  /** The Node ID of the label to be updated. */
  id: string;
  /** The updated name of the label. */
  name?: Maybe<string>;
}
/** Autogenerated input type of UpdateProject */
export interface UpdateProjectInput {
  /** The description of project. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of project. */
  name?: Maybe<string>;
  /** The Project ID to update. */
  projectId: string;
  /** Whether the project is public or not. */
  public?: Maybe<boolean>;
  /** Whether the project is open or closed. */
  state?: Maybe<ProjectState>;
}
/** Autogenerated input type of UpdateProjectCard */
export interface UpdateProjectCardInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** Whether or not the ProjectCard should be archived */
  isArchived?: Maybe<boolean>;
  /** The note of ProjectCard. */
  note?: Maybe<string>;
  /** The ProjectCard ID to update. */
  projectCardId: string;
}
/** Autogenerated input type of UpdateProjectColumn */
export interface UpdateProjectColumnInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The name of project column. */
  name: string;
  /** The ProjectColumn ID to update. */
  projectColumnId: string;
}
/** Autogenerated input type of UpdatePullRequest */
export interface UpdatePullRequestInput {
  /** The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. */
  baseRefName?: Maybe<string>;
  /** The contents of the pull request. */
  body?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** Indicates whether maintainers can modify the pull request. */
  maintainerCanModify?: Maybe<boolean>;
  /** The Node ID of the pull request. */
  pullRequestId: string;
  /** The title of the pull request. */
  title?: Maybe<string>;
}
/** Autogenerated input type of UpdatePullRequestReview */
export interface UpdatePullRequestReviewInput {
  /** The contents of the pull request review body. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the pull request review to modify. */
  pullRequestReviewId: string;
}
/** Autogenerated input type of UpdatePullRequestReviewComment */
export interface UpdatePullRequestReviewCommentInput {
  /** The text of the comment. */
  body: string;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the comment to modify. */
  pullRequestReviewCommentId: string;
}
/** Autogenerated input type of UpdateSubscription */
export interface UpdateSubscriptionInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The new state of the subscription. */
  state: SubscriptionState;
  /** The Node ID of the subscribable object to modify. */
  subscribableId: string;
}
/** Autogenerated input type of UpdateTeamDiscussion */
export interface UpdateTeamDiscussionInput {
  /** The updated text of the discussion. */
  body?: Maybe<string>;
  /** The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server. */
  bodyVersion?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the discussion to modify. */
  id: string;
  /** If provided, sets the pinned state of the updated discussion. */
  pinned?: Maybe<boolean>;
  /** The updated title of the discussion. */
  title?: Maybe<string>;
}
/** Autogenerated input type of UpdateTeamDiscussionComment */
export interface UpdateTeamDiscussionCommentInput {
  /** The updated text of the comment. */
  body: string;
  /** The current version of the body content. */
  bodyVersion?: Maybe<string>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The ID of the comment to modify. */
  id: string;
}
/** Autogenerated input type of UpdateTopics */
export interface UpdateTopicsInput {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<string>;
  /** The Node ID of the repository. */
  repositoryId: string;
  /** An array of topic names. */
  topicNames: string[];
}
/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = "ASC",
  Desc = "DESC"
}
/** Properties by which organization connections can be ordered. */
export enum OrganizationOrderField {
  CreatedAt = "CREATED_AT",
  Login = "LOGIN"
}
/** Properties by which user status connections can be ordered. */
export enum UserStatusOrderField {
  UpdatedAt = "UPDATED_AT"
}
/** The possible archived states of a project card. */
export enum ProjectCardArchivedState {
  Archived = "ARCHIVED",
  NotArchived = "NOT_ARCHIVED"
}
/** A comment author association with repository. */
export enum CommentAuthorAssociation {
  Collaborator = "COLLABORATOR",
  Contributor = "CONTRIBUTOR",
  FirstTimer = "FIRST_TIMER",
  FirstTimeContributor = "FIRST_TIME_CONTRIBUTOR",
  Member = "MEMBER",
  None = "NONE",
  Owner = "OWNER"
}
/** The possible states of an issue. */
export enum IssueState {
  Closed = "CLOSED",
  Open = "OPEN"
}
/** Properties by which issue connections can be ordered. */
export enum IssueOrderField {
  Comments = "COMMENTS",
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT"
}
/** The possible states of a pull request. */
export enum PullRequestState {
  Closed = "CLOSED",
  Merged = "MERGED",
  Open = "OPEN"
}
/** The possible reasons that an issue or pull request was locked. */
export enum LockReason {
  OffTopic = "OFF_TOPIC",
  Resolved = "RESOLVED",
  Spam = "SPAM",
  TooHeated = "TOO_HEATED"
}
/** Emojis that can be attached to Issues, Pull Requests and Comments. */
export enum ReactionContent {
  Confused = "CONFUSED",
  Eyes = "EYES",
  Heart = "HEART",
  Hooray = "HOORAY",
  Laugh = "LAUGH",
  Rocket = "ROCKET",
  ThumbsDown = "THUMBS_DOWN",
  ThumbsUp = "THUMBS_UP"
}
/** A list of fields that reactions can be ordered by. */
export enum ReactionOrderField {
  CreatedAt = "CREATED_AT"
}
/** The possible reasons a given repository could be in a locked state. */
export enum RepositoryLockReason {
  Billing = "BILLING",
  Migrating = "MIGRATING",
  Moving = "MOVING",
  Rename = "RENAME"
}
/** The affiliation of a user to a repository */
export enum RepositoryAffiliation {
  Collaborator = "COLLABORATOR",
  OrganizationMember = "ORGANIZATION_MEMBER",
  Owner = "OWNER"
}
/** Properties by which repository connections can be ordered. */
export enum RepositoryOrderField {
  CreatedAt = "CREATED_AT",
  Name = "NAME",
  PushedAt = "PUSHED_AT",
  Stargazers = "STARGAZERS",
  UpdatedAt = "UPDATED_AT"
}
/** The privacy of a repository */
export enum RepositoryPrivacy {
  Private = "PRIVATE",
  Public = "PUBLIC"
}
/** Properties by which star connections can be ordered. */
export enum StarOrderField {
  StarredAt = "STARRED_AT"
}
/** The possible states of a subscription. */
export enum SubscriptionState {
  Ignored = "IGNORED",
  Subscribed = "SUBSCRIBED",
  Unsubscribed = "UNSUBSCRIBED"
}
/** Properties by which team connections can be ordered. */
export enum TeamOrderField {
  Name = "NAME"
}
/** The possible errors that will prevent a user from updating a comment. */
export enum CommentCannotUpdateReason {
  Denied = "DENIED",
  InsufficientAccess = "INSUFFICIENT_ACCESS",
  Locked = "LOCKED",
  LoginRequired = "LOGIN_REQUIRED",
  Maintenance = "MAINTENANCE",
  VerifiedEmailRequired = "VERIFIED_EMAIL_REQUIRED"
}
/** Properties by which team discussion comment connections can be ordered. */
export enum TeamDiscussionCommentOrderField {
  Number = "NUMBER"
}
/** Properties by which team discussion connections can be ordered. */
export enum TeamDiscussionOrderField {
  CreatedAt = "CREATED_AT"
}
/** The possible organization invitation types. */
export enum OrganizationInvitationType {
  Email = "EMAIL",
  User = "USER"
}
/** The possible organization invitation roles. */
export enum OrganizationInvitationRole {
  Admin = "ADMIN",
  BillingManager = "BILLING_MANAGER",
  DirectMember = "DIRECT_MEMBER",
  Reinstate = "REINSTATE"
}
/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
export enum TeamMembershipType {
  All = "ALL",
  ChildTeam = "CHILD_TEAM",
  Immediate = "IMMEDIATE"
}
/** Properties by which team member connections can be ordered. */
export enum TeamMemberOrderField {
  CreatedAt = "CREATED_AT",
  Login = "LOGIN"
}
/** The possible team member roles; either 'maintainer' or 'member'. */
export enum TeamMemberRole {
  Maintainer = "MAINTAINER",
  Member = "MEMBER"
}
/** The possible team privacy values. */
export enum TeamPrivacy {
  Secret = "SECRET",
  Visible = "VISIBLE"
}
/** Properties by which team repository connections can be ordered. */
export enum TeamRepositoryOrderField {
  CreatedAt = "CREATED_AT",
  Name = "NAME",
  Permission = "PERMISSION",
  PushedAt = "PUSHED_AT",
  Stargazers = "STARGAZERS",
  UpdatedAt = "UPDATED_AT"
}
/** The access level to a repository */
export enum RepositoryPermission {
  Admin = "ADMIN",
  Read = "READ",
  Write = "WRITE"
}
/** Collaborators affiliation level with a subject. */
export enum CollaboratorAffiliation {
  All = "ALL",
  Direct = "DIRECT",
  Outside = "OUTSIDE"
}
/** The possible types of check runs. */
export enum CheckRunType {
  All = "ALL",
  Latest = "LATEST"
}
/** The possible states for a check suite or run status. */
export enum CheckStatusState {
  Completed = "COMPLETED",
  InProgress = "IN_PROGRESS",
  Queued = "QUEUED",
  Requested = "REQUESTED"
}
/** Represents an annotation's information level. */
export enum CheckAnnotationLevel {
  Failure = "FAILURE",
  Notice = "NOTICE",
  Warning = "WARNING"
}
/** The possible states for a check suite or run conclusion. */
export enum CheckConclusionState {
  ActionRequired = "ACTION_REQUIRED",
  Cancelled = "CANCELLED",
  Failure = "FAILURE",
  Neutral = "NEUTRAL",
  Success = "SUCCESS",
  TimedOut = "TIMED_OUT"
}
/** Properties by which deployment connections can be ordered. */
export enum DeploymentOrderField {
  CreatedAt = "CREATED_AT"
}
/** The possible states for a deployment status. */
export enum DeploymentStatusState {
  Error = "ERROR",
  Failure = "FAILURE",
  Inactive = "INACTIVE",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
  Queued = "QUEUED",
  Success = "SUCCESS"
}
/** The possible states in which a deployment can be. */
export enum DeploymentState {
  Abandoned = "ABANDONED",
  Active = "ACTIVE",
  Destroyed = "DESTROYED",
  Error = "ERROR",
  Failure = "FAILURE",
  Inactive = "INACTIVE",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
  Queued = "QUEUED"
}
/** The state of a Git signature. */
export enum GitSignatureState {
  BadCert = "BAD_CERT",
  BadEmail = "BAD_EMAIL",
  ExpiredKey = "EXPIRED_KEY",
  GpgverifyError = "GPGVERIFY_ERROR",
  GpgverifyUnavailable = "GPGVERIFY_UNAVAILABLE",
  Invalid = "INVALID",
  MalformedSig = "MALFORMED_SIG",
  NotSigningKey = "NOT_SIGNING_KEY",
  NoUser = "NO_USER",
  OcspError = "OCSP_ERROR",
  OcspPending = "OCSP_PENDING",
  OcspRevoked = "OCSP_REVOKED",
  UnknownKey = "UNKNOWN_KEY",
  UnknownSigType = "UNKNOWN_SIG_TYPE",
  Unsigned = "UNSIGNED",
  UnverifiedEmail = "UNVERIFIED_EMAIL",
  Valid = "VALID"
}
/** The possible commit status states. */
export enum StatusState {
  Error = "ERROR",
  Expected = "EXPECTED",
  Failure = "FAILURE",
  Pending = "PENDING",
  Success = "SUCCESS"
}
/** Properties by which language connections can be ordered. */
export enum LanguageOrderField {
  Size = "SIZE"
}
/** The possible states of a milestone. */
export enum MilestoneState {
  Closed = "CLOSED",
  Open = "OPEN"
}
/** Properties by which milestone connections can be ordered. */
export enum MilestoneOrderField {
  CreatedAt = "CREATED_AT",
  DueDate = "DUE_DATE",
  Number = "NUMBER",
  UpdatedAt = "UPDATED_AT"
}
/** Properties by which project connections can be ordered. */
export enum ProjectOrderField {
  CreatedAt = "CREATED_AT",
  Name = "NAME",
  UpdatedAt = "UPDATED_AT"
}
/** State of the project; either 'open' or 'closed' */
export enum ProjectState {
  Closed = "CLOSED",
  Open = "OPEN"
}
/** Properties by which ref connections can be ordered. */
export enum RefOrderField {
  Alphabetical = "ALPHABETICAL",
  TagCommitDate = "TAG_COMMIT_DATE"
}
/** Properties by which release connections can be ordered. */
export enum ReleaseOrderField {
  CreatedAt = "CREATED_AT",
  Name = "NAME"
}
/** Severity of the vulnerability. */
export enum SecurityAdvisorySeverity {
  Critical = "CRITICAL",
  High = "HIGH",
  Low = "LOW",
  Moderate = "MODERATE"
}
/** The possible ecosystems of a security vulnerability's package. */
export enum SecurityAdvisoryEcosystem {
  Maven = "MAVEN",
  Npm = "NPM",
  Nuget = "NUGET",
  Pip = "PIP",
  Rubygems = "RUBYGEMS"
}
/** Properties by which security vulnerability connections can be ordered. */
export enum SecurityVulnerabilityOrderField {
  UpdatedAt = "UPDATED_AT"
}
/** Detailed status information about a pull request merge. */
export enum MergeStateStatus {
  Behind = "BEHIND",
  Blocked = "BLOCKED",
  Clean = "CLEAN",
  Dirty = "DIRTY",
  Draft = "DRAFT",
  HasHooks = "HAS_HOOKS",
  Unknown = "UNKNOWN",
  Unstable = "UNSTABLE"
}
/** Whether or not a PullRequest can be merged. */
export enum MergeableState {
  Conflicting = "CONFLICTING",
  Mergeable = "MERGEABLE",
  Unknown = "UNKNOWN"
}
/** The possible states of a pull request review. */
export enum PullRequestReviewState {
  Approved = "APPROVED",
  ChangesRequested = "CHANGES_REQUESTED",
  Commented = "COMMENTED",
  Dismissed = "DISMISSED",
  Pending = "PENDING"
}
/** The possible states of a pull request review comment. */
export enum PullRequestReviewCommentState {
  Pending = "PENDING",
  Submitted = "SUBMITTED"
}
/** The possible item types found in a timeline. */
export enum PullRequestTimelineItemsItemType {
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  AssignedEvent = "ASSIGNED_EVENT",
  BaseRefChangedEvent = "BASE_REF_CHANGED_EVENT",
  BaseRefForcePushedEvent = "BASE_REF_FORCE_PUSHED_EVENT",
  ClosedEvent = "CLOSED_EVENT",
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  DemilestonedEvent = "DEMILESTONED_EVENT",
  DeployedEvent = "DEPLOYED_EVENT",
  DeploymentEnvironmentChangedEvent = "DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT",
  HeadRefDeletedEvent = "HEAD_REF_DELETED_EVENT",
  HeadRefForcePushedEvent = "HEAD_REF_FORCE_PUSHED_EVENT",
  HeadRefRestoredEvent = "HEAD_REF_RESTORED_EVENT",
  IssueComment = "ISSUE_COMMENT",
  LabeledEvent = "LABELED_EVENT",
  LockedEvent = "LOCKED_EVENT",
  MentionedEvent = "MENTIONED_EVENT",
  MergedEvent = "MERGED_EVENT",
  MilestonedEvent = "MILESTONED_EVENT",
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  PinnedEvent = "PINNED_EVENT",
  PullRequestCommit = "PULL_REQUEST_COMMIT",
  PullRequestCommitCommentThread = "PULL_REQUEST_COMMIT_COMMENT_THREAD",
  PullRequestReview = "PULL_REQUEST_REVIEW",
  PullRequestReviewThread = "PULL_REQUEST_REVIEW_THREAD",
  PullRequestRevisionMarker = "PULL_REQUEST_REVISION_MARKER",
  ReferencedEvent = "REFERENCED_EVENT",
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  ReopenedEvent = "REOPENED_EVENT",
  ReviewDismissedEvent = "REVIEW_DISMISSED_EVENT",
  ReviewRequestedEvent = "REVIEW_REQUESTED_EVENT",
  ReviewRequestRemovedEvent = "REVIEW_REQUEST_REMOVED_EVENT",
  SubscribedEvent = "SUBSCRIBED_EVENT",
  TransferredEvent = "TRANSFERRED_EVENT",
  UnassignedEvent = "UNASSIGNED_EVENT",
  UnlabeledEvent = "UNLABELED_EVENT",
  UnlockedEvent = "UNLOCKED_EVENT",
  UnpinnedEvent = "UNPINNED_EVENT",
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT"
}
/** The possible item types found in a timeline. */
export enum IssueTimelineItemsItemType {
  AddedToProjectEvent = "ADDED_TO_PROJECT_EVENT",
  AssignedEvent = "ASSIGNED_EVENT",
  ClosedEvent = "CLOSED_EVENT",
  CommentDeletedEvent = "COMMENT_DELETED_EVENT",
  ConvertedNoteToIssueEvent = "CONVERTED_NOTE_TO_ISSUE_EVENT",
  CrossReferencedEvent = "CROSS_REFERENCED_EVENT",
  DemilestonedEvent = "DEMILESTONED_EVENT",
  IssueComment = "ISSUE_COMMENT",
  LabeledEvent = "LABELED_EVENT",
  LockedEvent = "LOCKED_EVENT",
  MentionedEvent = "MENTIONED_EVENT",
  MilestonedEvent = "MILESTONED_EVENT",
  MovedColumnsInProjectEvent = "MOVED_COLUMNS_IN_PROJECT_EVENT",
  PinnedEvent = "PINNED_EVENT",
  ReferencedEvent = "REFERENCED_EVENT",
  RemovedFromProjectEvent = "REMOVED_FROM_PROJECT_EVENT",
  RenamedTitleEvent = "RENAMED_TITLE_EVENT",
  ReopenedEvent = "REOPENED_EVENT",
  SubscribedEvent = "SUBSCRIBED_EVENT",
  TransferredEvent = "TRANSFERRED_EVENT",
  UnassignedEvent = "UNASSIGNED_EVENT",
  UnlabeledEvent = "UNLABELED_EVENT",
  UnlockedEvent = "UNLOCKED_EVENT",
  UnpinnedEvent = "UNPINNED_EVENT",
  UnsubscribedEvent = "UNSUBSCRIBED_EVENT"
}
/** Various content states of a ProjectCard */
export enum ProjectCardState {
  ContentOnly = "CONTENT_ONLY",
  NoteOnly = "NOTE_ONLY",
  Redacted = "REDACTED"
}
/** The semantic purpose of the column - todo, in progress, or done. */
export enum ProjectColumnPurpose {
  Done = "DONE",
  InProgress = "IN_PROGRESS",
  Todo = "TODO"
}
/** Properties by which commit contribution connections can be ordered. */
export enum CommitContributionOrderField {
  CommitCount = "COMMIT_COUNT",
  OccurredAt = "OCCURRED_AT"
}
/** Properties by which contribution connections can be ordered. */
export enum ContributionOrderField {
  OccurredAt = "OCCURRED_AT"
}
/** Properties by which gist connections can be ordered. */
export enum GistOrderField {
  CreatedAt = "CREATED_AT",
  PushedAt = "PUSHED_AT",
  UpdatedAt = "UPDATED_AT"
}
/** The privacy of a Gist */
export enum GistPrivacy {
  All = "ALL",
  Public = "PUBLIC",
  Secret = "SECRET"
}
/** The reason a repository is listed as 'contributed'. */
export enum RepositoryContributionType {
  Commit = "COMMIT",
  Issue = "ISSUE",
  PullRequest = "PULL_REQUEST",
  PullRequestReview = "PULL_REQUEST_REVIEW",
  Repository = "REPOSITORY"
}
/** The possible roles within an organization for its members. */
export enum OrganizationMemberRole {
  Admin = "ADMIN",
  Member = "MEMBER"
}
/** The role of a user on a team. */
export enum TeamRole {
  Admin = "ADMIN",
  Member = "MEMBER"
}
/** Properties by which business member connections can be ordered. */
export enum BusinessMemberOrderField {
  CreatedAt = "CREATED_AT",
  Login = "LOGIN"
}
/** The possible values for an enabled/disabled business setting. */
export enum BusinessEnabledDisabledSettingValue {
  Disabled = "DISABLED",
  Enabled = "ENABLED",
  NoPolicy = "NO_POLICY"
}
/** The possible values for the business default repository permission setting. */
export enum BusinessDefaultRepositoryPermissionSettingValue {
  Admin = "ADMIN",
  None = "NONE",
  NoPolicy = "NO_POLICY",
  Read = "READ",
  Write = "WRITE"
}
/** The possible default permissions for repositories. */
export enum DefaultRepositoryPermissionField {
  Admin = "ADMIN",
  None = "NONE",
  Read = "READ",
  Write = "WRITE"
}
/** The possible values for the business members can create repositories setting. */
export enum BusinessMembersCanCreateRepositoriesSettingValue {
  All = "ALL",
  Disabled = "DISABLED",
  NoPolicy = "NO_POLICY",
  Private = "PRIVATE"
}
/** The possible values for the members can create repositories setting on an organization. */
export enum OrganizationMembersCanCreateRepositoriesSettingValue {
  All = "ALL",
  Disabled = "DISABLED",
  Private = "PRIVATE"
}
/** The possible business member invitation roles. */
export enum BusinessMemberInvitationRole {
  Admin = "ADMIN",
  BillingManager = "BILLING_MANAGER"
}
/** The possible digest algorithms used to sign SAML requests for a Identity Provider. */
export enum SamlDigestAlgorithm {
  Sha1 = "SHA1",
  Sha256 = "SHA256",
  Sha384 = "SHA384",
  Sha512 = "SHA512"
}
/** The possible signature algorithms used to sign SAML requests for a Identity Provider. */
export enum SamlSignatureAlgorithm {
  RsaSha1 = "RSA_SHA1",
  RsaSha256 = "RSA_SHA256",
  RsaSha384 = "RSA_SHA384",
  RsaSha512 = "RSA_SHA512"
}
/** The possible states in which authentication can be configured with an Identity Provider. */
export enum IdentityProviderConfigurationState {
  Configured = "CONFIGURED",
  Enforced = "ENFORCED",
  Unconfigured = "UNCONFIGURED"
}
/** The possible values for an enabled/no policy business setting. */
export enum BusinessEnabledSettingValue {
  Enabled = "ENABLED",
  NoPolicy = "NO_POLICY"
}
/** Represents the individual results of a search. */
export enum SearchType {
  Issue = "ISSUE",
  Repository = "REPOSITORY",
  User = "USER"
}
/** Identifier formats available for advisories. */
export enum SecurityAdvisoryIdentifierType {
  Cve = "CVE",
  Ghsa = "GHSA"
}
/** Properties by which security advisory connections can be ordered. */
export enum SecurityAdvisoryOrderField {
  PublishedAt = "PUBLISHED_AT",
  UpdatedAt = "UPDATED_AT"
}
/** The possible events to perform on a pull request review. */
export enum PullRequestReviewEvent {
  Approve = "APPROVE",
  Comment = "COMMENT",
  Dismiss = "DISMISS",
  RequestChanges = "REQUEST_CHANGES"
}
/** The possible states that can be requested when creating a check run. */
export enum RequestableCheckStatusState {
  Completed = "COMPLETED",
  InProgress = "IN_PROGRESS",
  Queued = "QUEUED"
}
/** Reason that the suggested topic is declined. */
export enum TopicSuggestionDeclineReason {
  NotRelevant = "NOT_RELEVANT",
  PersonalPreference = "PERSONAL_PREFERENCE",
  TooGeneral = "TOO_GENERAL",
  TooSpecific = "TOO_SPECIFIC"
}
/** The reasons a piece of content can be reported or minimized. */
export enum ReportedContentClassifiers {
  Abuse = "ABUSE",
  OffTopic = "OFF_TOPIC",
  Outdated = "OUTDATED",
  Resolved = "RESOLVED",
  Spam = "SPAM"
}
/** Properties by which pull_requests connections can be ordered. */
export enum PullRequestOrderField {
  CreatedAt = "CREATED_AT",
  UpdatedAt = "UPDATED_AT"
}

/** An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string. */
export type Uri = any;

/** An ISO-8601 encoded UTC date string. */
export type DateTime = any;

/** A string containing HTML code. */
export type Html = any;

/** A Git object ID. */
export type GitObjectId = any;

/** An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC. */
export type GitTimestamp = any;

/** Git SSH string */
export type GitSshRemote = any;

/** An ISO-8601 encoded date string. */
export type Date = any;

/** A valid x509 certificate string */
export type X509Certificate = any;

// ====================================================
// Documents
// ====================================================

export namespace Header {
  export type Variables = {};

  export type Query = {
    __typename?: "Query";

    viewer: Viewer;
  };

  export type Viewer = {
    __typename?: "User";

    avatarUrl: Uri;

    login: string;
  };
}

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

// ====================================================
// Components
// ====================================================

export namespace Header {
  export const Document = gql`
    query Header {
      viewer {
        avatarUrl
        login
      }
    }
  `;
  export class Component extends React.Component<
    Partial<ReactApollo.QueryProps<Query, Variables>>
  > {
    render() {
      return (
        <ReactApollo.Query<Query, Variables>
          query={Document}
          {...(this as any)["props"] as any}
        />
      );
    }
  }
  export type Props<TChildProps = any> = Partial<
    ReactApollo.DataProps<Query, Variables>
  > &
    TChildProps;
  export function HOC<TProps, TChildProps = any>(
    operationOptions:
      | ReactApollo.OperationOption<
          TProps,
          Query,
          Variables,
          Props<TChildProps>
        >
      | undefined
  ) {
    return ReactApollo.graphql<TProps, Query, Variables, Props<TChildProps>>(
      Document,
      operationOptions
    );
  }
}

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: "INTERFACE",
        name: "Node",
        possibleTypes: [
          {
            name: "Business"
          },
          {
            name: "Organization"
          },
          {
            name: "UserStatus"
          },
          {
            name: "User"
          },
          {
            name: "Project"
          },
          {
            name: "ProjectColumn"
          },
          {
            name: "ProjectCard"
          },
          {
            name: "Issue"
          },
          {
            name: "UserContentEdit"
          },
          {
            name: "Label"
          },
          {
            name: "PullRequest"
          },
          {
            name: "Reaction"
          },
          {
            name: "Repository"
          },
          {
            name: "License"
          },
          {
            name: "BranchProtectionRule"
          },
          {
            name: "Ref"
          },
          {
            name: "PushAllowance"
          },
          {
            name: "Team"
          },
          {
            name: "TeamDiscussion"
          },
          {
            name: "TeamDiscussionComment"
          },
          {
            name: "OrganizationInvitation"
          },
          {
            name: "ReviewDismissalAllowance"
          },
          {
            name: "CodeOfConduct"
          },
          {
            name: "CommitComment"
          },
          {
            name: "Commit"
          },
          {
            name: "CheckSuite"
          },
          {
            name: "App"
          },
          {
            name: "CheckRun"
          },
          {
            name: "Push"
          },
          {
            name: "Deployment"
          },
          {
            name: "DeploymentStatus"
          },
          {
            name: "Status"
          },
          {
            name: "StatusContext"
          },
          {
            name: "Tree"
          },
          {
            name: "DependencyGraphManifest"
          },
          {
            name: "DeployKey"
          },
          {
            name: "Language"
          },
          {
            name: "Milestone"
          },
          {
            name: "PinnedIssue"
          },
          {
            name: "ProtectedBranch"
          },
          {
            name: "Release"
          },
          {
            name: "ReleaseAsset"
          },
          {
            name: "RepositoryTopic"
          },
          {
            name: "Topic"
          },
          {
            name: "RepositoryVulnerabilityAlert"
          },
          {
            name: "SecurityAdvisory"
          },
          {
            name: "IssueComment"
          },
          {
            name: "PullRequestCommit"
          },
          {
            name: "ReviewRequest"
          },
          {
            name: "PullRequestReviewThread"
          },
          {
            name: "PullRequestReviewComment"
          },
          {
            name: "PullRequestReview"
          },
          {
            name: "AssignedEvent"
          },
          {
            name: "BaseRefForcePushedEvent"
          },
          {
            name: "ClosedEvent"
          },
          {
            name: "CommitCommentThread"
          },
          {
            name: "CrossReferencedEvent"
          },
          {
            name: "DemilestonedEvent"
          },
          {
            name: "DeployedEvent"
          },
          {
            name: "DeploymentEnvironmentChangedEvent"
          },
          {
            name: "HeadRefDeletedEvent"
          },
          {
            name: "HeadRefForcePushedEvent"
          },
          {
            name: "HeadRefRestoredEvent"
          },
          {
            name: "LabeledEvent"
          },
          {
            name: "LockedEvent"
          },
          {
            name: "MergedEvent"
          },
          {
            name: "MilestonedEvent"
          },
          {
            name: "ReferencedEvent"
          },
          {
            name: "RenamedTitleEvent"
          },
          {
            name: "ReopenedEvent"
          },
          {
            name: "ReviewDismissedEvent"
          },
          {
            name: "ReviewRequestRemovedEvent"
          },
          {
            name: "ReviewRequestedEvent"
          },
          {
            name: "SubscribedEvent"
          },
          {
            name: "UnassignedEvent"
          },
          {
            name: "UnlabeledEvent"
          },
          {
            name: "UnlockedEvent"
          },
          {
            name: "UnsubscribedEvent"
          },
          {
            name: "AddedToProjectEvent"
          },
          {
            name: "BaseRefChangedEvent"
          },
          {
            name: "CommentDeletedEvent"
          },
          {
            name: "ConvertedNoteToIssueEvent"
          },
          {
            name: "MentionedEvent"
          },
          {
            name: "MovedColumnsInProjectEvent"
          },
          {
            name: "PinnedEvent"
          },
          {
            name: "PullRequestCommitCommentThread"
          },
          {
            name: "RemovedFromProjectEvent"
          },
          {
            name: "TransferredEvent"
          },
          {
            name: "UnpinnedEvent"
          },
          {
            name: "Gist"
          },
          {
            name: "GistComment"
          },
          {
            name: "PublicKey"
          },
          {
            name: "OrganizationIdentityProvider"
          },
          {
            name: "ExternalIdentity"
          },
          {
            name: "BusinessMemberInvitation"
          },
          {
            name: "BusinessIdentityProvider"
          },
          {
            name: "MarketplaceCategory"
          },
          {
            name: "MarketplaceListing"
          },
          {
            name: "Blob"
          },
          {
            name: "Bot"
          },
          {
            name: "BusinessRepositoryInfo"
          },
          {
            name: "RepositoryInvitation"
          },
          {
            name: "Tag"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Actor",
        possibleTypes: [
          {
            name: "Organization"
          },
          {
            name: "User"
          },
          {
            name: "Bot"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "MemberStatusable",
        possibleTypes: [
          {
            name: "Organization"
          },
          {
            name: "Team"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "ProjectOwner",
        possibleTypes: [
          {
            name: "Organization"
          },
          {
            name: "User"
          },
          {
            name: "Repository"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Closable",
        possibleTypes: [
          {
            name: "Project"
          },
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          },
          {
            name: "Milestone"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Updatable",
        possibleTypes: [
          {
            name: "Project"
          },
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          },
          {
            name: "TeamDiscussion"
          },
          {
            name: "TeamDiscussionComment"
          },
          {
            name: "CommitComment"
          },
          {
            name: "IssueComment"
          },
          {
            name: "PullRequestReviewComment"
          },
          {
            name: "PullRequestReview"
          },
          {
            name: "GistComment"
          }
        ]
      },
      {
        kind: "UNION",
        name: "ProjectCardItem",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Assignable",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Comment",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          },
          {
            name: "TeamDiscussion"
          },
          {
            name: "TeamDiscussionComment"
          },
          {
            name: "CommitComment"
          },
          {
            name: "IssueComment"
          },
          {
            name: "PullRequestReviewComment"
          },
          {
            name: "PullRequestReview"
          },
          {
            name: "GistComment"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Labelable",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Lockable",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Reactable",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          },
          {
            name: "TeamDiscussion"
          },
          {
            name: "TeamDiscussionComment"
          },
          {
            name: "CommitComment"
          },
          {
            name: "IssueComment"
          },
          {
            name: "PullRequestReviewComment"
          },
          {
            name: "PullRequestReview"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "RepositoryNode",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          },
          {
            name: "CommitComment"
          },
          {
            name: "RepositoryVulnerabilityAlert"
          },
          {
            name: "IssueComment"
          },
          {
            name: "PullRequestReviewComment"
          },
          {
            name: "PullRequestReview"
          },
          {
            name: "CommitCommentThread"
          },
          {
            name: "PullRequestCommitCommentThread"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "RegistryPackageOwner",
        possibleTypes: [
          {
            name: "Organization"
          },
          {
            name: "User"
          },
          {
            name: "Repository"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "RepositoryInfo",
        possibleTypes: [
          {
            name: "Repository"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "RepositoryOwner",
        possibleTypes: [
          {
            name: "Organization"
          },
          {
            name: "User"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Starrable",
        possibleTypes: [
          {
            name: "Repository"
          },
          {
            name: "Topic"
          },
          {
            name: "Gist"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Subscribable",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          },
          {
            name: "Repository"
          },
          {
            name: "Team"
          },
          {
            name: "TeamDiscussion"
          },
          {
            name: "Commit"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "UniformResourceLocatable",
        possibleTypes: [
          {
            name: "Organization"
          },
          {
            name: "User"
          },
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          },
          {
            name: "Repository"
          },
          {
            name: "TeamDiscussion"
          },
          {
            name: "TeamDiscussionComment"
          },
          {
            name: "Commit"
          },
          {
            name: "CheckRun"
          },
          {
            name: "Milestone"
          },
          {
            name: "Release"
          },
          {
            name: "RepositoryTopic"
          },
          {
            name: "PullRequestCommit"
          },
          {
            name: "ClosedEvent"
          },
          {
            name: "CrossReferencedEvent"
          },
          {
            name: "MergedEvent"
          },
          {
            name: "ReviewDismissedEvent"
          },
          {
            name: "Bot"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "GitObject",
        possibleTypes: [
          {
            name: "Commit"
          },
          {
            name: "Tree"
          },
          {
            name: "Blob"
          },
          {
            name: "Tag"
          }
        ]
      },
      {
        kind: "UNION",
        name: "PushAllowanceActor",
        possibleTypes: [
          {
            name: "Team"
          },
          {
            name: "User"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Deletable",
        possibleTypes: [
          {
            name: "TeamDiscussion"
          },
          {
            name: "TeamDiscussionComment"
          },
          {
            name: "CommitComment"
          },
          {
            name: "IssueComment"
          },
          {
            name: "PullRequestReviewComment"
          },
          {
            name: "PullRequestReview"
          },
          {
            name: "GistComment"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "UpdatableComment",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          },
          {
            name: "TeamDiscussion"
          },
          {
            name: "TeamDiscussionComment"
          },
          {
            name: "CommitComment"
          },
          {
            name: "IssueComment"
          },
          {
            name: "PullRequestReviewComment"
          },
          {
            name: "PullRequestReview"
          },
          {
            name: "GistComment"
          }
        ]
      },
      {
        kind: "UNION",
        name: "ReviewDismissalAllowanceActor",
        possibleTypes: [
          {
            name: "Team"
          },
          {
            name: "User"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Minimizable",
        possibleTypes: [
          {
            name: "CommitComment"
          },
          {
            name: "IssueComment"
          },
          {
            name: "PullRequestReviewComment"
          },
          {
            name: "GistComment"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "GitSignature",
        possibleTypes: [
          {
            name: "GpgSignature"
          },
          {
            name: "SmimeSignature"
          },
          {
            name: "UnknownSignature"
          }
        ]
      },
      {
        kind: "UNION",
        name: "IssueOrPullRequest",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "HovercardContext",
        possibleTypes: [
          {
            name: "GenericHovercardContext"
          },
          {
            name: "OrganizationTeamsHovercardContext"
          },
          {
            name: "OrganizationsHovercardContext"
          },
          {
            name: "ReviewStatusHovercardContext"
          },
          {
            name: "ViewerHovercardContext"
          }
        ]
      },
      {
        kind: "UNION",
        name: "RequestedReviewer",
        possibleTypes: [
          {
            name: "Team"
          },
          {
            name: "User"
          }
        ]
      },
      {
        kind: "UNION",
        name: "PullRequestTimelineItem",
        possibleTypes: [
          {
            name: "AssignedEvent"
          },
          {
            name: "BaseRefForcePushedEvent"
          },
          {
            name: "ClosedEvent"
          },
          {
            name: "Commit"
          },
          {
            name: "CommitCommentThread"
          },
          {
            name: "CrossReferencedEvent"
          },
          {
            name: "DemilestonedEvent"
          },
          {
            name: "DeployedEvent"
          },
          {
            name: "DeploymentEnvironmentChangedEvent"
          },
          {
            name: "HeadRefDeletedEvent"
          },
          {
            name: "HeadRefForcePushedEvent"
          },
          {
            name: "HeadRefRestoredEvent"
          },
          {
            name: "IssueComment"
          },
          {
            name: "LabeledEvent"
          },
          {
            name: "LockedEvent"
          },
          {
            name: "MergedEvent"
          },
          {
            name: "MilestonedEvent"
          },
          {
            name: "PullRequestReview"
          },
          {
            name: "PullRequestReviewComment"
          },
          {
            name: "PullRequestReviewThread"
          },
          {
            name: "ReferencedEvent"
          },
          {
            name: "RenamedTitleEvent"
          },
          {
            name: "ReopenedEvent"
          },
          {
            name: "ReviewDismissedEvent"
          },
          {
            name: "ReviewRequestRemovedEvent"
          },
          {
            name: "ReviewRequestedEvent"
          },
          {
            name: "SubscribedEvent"
          },
          {
            name: "UnassignedEvent"
          },
          {
            name: "UnlabeledEvent"
          },
          {
            name: "UnlockedEvent"
          },
          {
            name: "UnsubscribedEvent"
          }
        ]
      },
      {
        kind: "UNION",
        name: "Closer",
        possibleTypes: [
          {
            name: "Commit"
          },
          {
            name: "PullRequest"
          }
        ]
      },
      {
        kind: "UNION",
        name: "ReferencedSubject",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          }
        ]
      },
      {
        kind: "UNION",
        name: "MilestoneItem",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          }
        ]
      },
      {
        kind: "UNION",
        name: "RenamedTitleSubject",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "PullRequest"
          }
        ]
      },
      {
        kind: "UNION",
        name: "PullRequestTimelineItems",
        possibleTypes: [
          {
            name: "AddedToProjectEvent"
          },
          {
            name: "AssignedEvent"
          },
          {
            name: "BaseRefChangedEvent"
          },
          {
            name: "BaseRefForcePushedEvent"
          },
          {
            name: "ClosedEvent"
          },
          {
            name: "CommentDeletedEvent"
          },
          {
            name: "ConvertedNoteToIssueEvent"
          },
          {
            name: "CrossReferencedEvent"
          },
          {
            name: "DemilestonedEvent"
          },
          {
            name: "DeployedEvent"
          },
          {
            name: "DeploymentEnvironmentChangedEvent"
          },
          {
            name: "HeadRefDeletedEvent"
          },
          {
            name: "HeadRefForcePushedEvent"
          },
          {
            name: "HeadRefRestoredEvent"
          },
          {
            name: "IssueComment"
          },
          {
            name: "LabeledEvent"
          },
          {
            name: "LockedEvent"
          },
          {
            name: "MentionedEvent"
          },
          {
            name: "MergedEvent"
          },
          {
            name: "MilestonedEvent"
          },
          {
            name: "MovedColumnsInProjectEvent"
          },
          {
            name: "PinnedEvent"
          },
          {
            name: "PullRequestCommit"
          },
          {
            name: "PullRequestCommitCommentThread"
          },
          {
            name: "PullRequestReview"
          },
          {
            name: "PullRequestReviewThread"
          },
          {
            name: "PullRequestRevisionMarker"
          },
          {
            name: "ReferencedEvent"
          },
          {
            name: "RemovedFromProjectEvent"
          },
          {
            name: "RenamedTitleEvent"
          },
          {
            name: "ReopenedEvent"
          },
          {
            name: "ReviewDismissedEvent"
          },
          {
            name: "ReviewRequestRemovedEvent"
          },
          {
            name: "ReviewRequestedEvent"
          },
          {
            name: "SubscribedEvent"
          },
          {
            name: "TransferredEvent"
          },
          {
            name: "UnassignedEvent"
          },
          {
            name: "UnlabeledEvent"
          },
          {
            name: "UnlockedEvent"
          },
          {
            name: "UnpinnedEvent"
          },
          {
            name: "UnsubscribedEvent"
          }
        ]
      },
      {
        kind: "UNION",
        name: "IssueTimelineItem",
        possibleTypes: [
          {
            name: "AssignedEvent"
          },
          {
            name: "ClosedEvent"
          },
          {
            name: "Commit"
          },
          {
            name: "CrossReferencedEvent"
          },
          {
            name: "DemilestonedEvent"
          },
          {
            name: "IssueComment"
          },
          {
            name: "LabeledEvent"
          },
          {
            name: "LockedEvent"
          },
          {
            name: "MilestonedEvent"
          },
          {
            name: "ReferencedEvent"
          },
          {
            name: "RenamedTitleEvent"
          },
          {
            name: "ReopenedEvent"
          },
          {
            name: "SubscribedEvent"
          },
          {
            name: "TransferredEvent"
          },
          {
            name: "UnassignedEvent"
          },
          {
            name: "UnlabeledEvent"
          },
          {
            name: "UnlockedEvent"
          },
          {
            name: "UnsubscribedEvent"
          }
        ]
      },
      {
        kind: "UNION",
        name: "IssueTimelineItems",
        possibleTypes: [
          {
            name: "AddedToProjectEvent"
          },
          {
            name: "AssignedEvent"
          },
          {
            name: "ClosedEvent"
          },
          {
            name: "CommentDeletedEvent"
          },
          {
            name: "ConvertedNoteToIssueEvent"
          },
          {
            name: "CrossReferencedEvent"
          },
          {
            name: "DemilestonedEvent"
          },
          {
            name: "IssueComment"
          },
          {
            name: "LabeledEvent"
          },
          {
            name: "LockedEvent"
          },
          {
            name: "MentionedEvent"
          },
          {
            name: "MilestonedEvent"
          },
          {
            name: "MovedColumnsInProjectEvent"
          },
          {
            name: "PinnedEvent"
          },
          {
            name: "ReferencedEvent"
          },
          {
            name: "RemovedFromProjectEvent"
          },
          {
            name: "RenamedTitleEvent"
          },
          {
            name: "ReopenedEvent"
          },
          {
            name: "SubscribedEvent"
          },
          {
            name: "TransferredEvent"
          },
          {
            name: "UnassignedEvent"
          },
          {
            name: "UnlabeledEvent"
          },
          {
            name: "UnlockedEvent"
          },
          {
            name: "UnpinnedEvent"
          },
          {
            name: "UnsubscribedEvent"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "RegistryPackageSearch",
        possibleTypes: [
          {
            name: "Organization"
          },
          {
            name: "User"
          }
        ]
      },
      {
        kind: "INTERFACE",
        name: "Contribution",
        possibleTypes: [
          {
            name: "CreatedCommitContribution"
          },
          {
            name: "CreatedIssueContribution"
          },
          {
            name: "RestrictedContribution"
          },
          {
            name: "CreatedPullRequestContribution"
          },
          {
            name: "CreatedRepositoryContribution"
          },
          {
            name: "JoinedGitHubContribution"
          }
        ]
      },
      {
        kind: "UNION",
        name: "CreatedIssueOrRestrictedContribution",
        possibleTypes: [
          {
            name: "CreatedIssueContribution"
          },
          {
            name: "RestrictedContribution"
          }
        ]
      },
      {
        kind: "UNION",
        name: "CreatedPullRequestOrRestrictedContribution",
        possibleTypes: [
          {
            name: "CreatedPullRequestContribution"
          },
          {
            name: "RestrictedContribution"
          }
        ]
      },
      {
        kind: "UNION",
        name: "CreatedRepositoryOrRestrictedContribution",
        possibleTypes: [
          {
            name: "CreatedRepositoryContribution"
          },
          {
            name: "RestrictedContribution"
          }
        ]
      },
      {
        kind: "UNION",
        name: "SearchResultItem",
        possibleTypes: [
          {
            name: "Issue"
          },
          {
            name: "MarketplaceListing"
          },
          {
            name: "Organization"
          },
          {
            name: "PullRequest"
          },
          {
            name: "Repository"
          },
          {
            name: "User"
          }
        ]
      },
      {
        kind: "UNION",
        name: "CollectionItemContent",
        possibleTypes: [
          {
            name: "Organization"
          },
          {
            name: "Repository"
          },
          {
            name: "User"
          }
        ]
      }
    ]
  }
};

export default result;
