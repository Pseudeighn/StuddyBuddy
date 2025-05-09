import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CollaborationPage = () => {
  const navigate = useNavigate();
  const [friends, setFriends] = useState([]);
  const [friendName, setFriendName] = useState('');
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [memberName, setMemberName] = useState('');
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  // Friend management
  const handleAddFriend = () => {
    if (friendName.trim() === '') return;
    setFriends([...friends, friendName]);
    setFriendName('');
  };

  const handleRemoveFriend = (friend) => {
    setFriends(friends.filter(f => f !== friend));
  };

  // Group management
  const handleAddGroup = () => {
    if (groupName.trim() === '') return;
    const newGroup = {
      id: Date.now(),
      name: groupName,
      members: ["You"] // Add current user automatically
    };
    setGroups([...groups, newGroup]);
    setGroupName('');
  };

  const handleAddMember = (groupId) => {
    if (memberName.trim() === '') return;
    setGroups(
      groups.map(group =>
        group.id === groupId
          ? { ...group, members: [...group.members, memberName] }
          : group
      )
    );
    setMemberName('');
    setSelectedGroupId(null);
  };

  const handleRemoveMember = (groupId, member) => {
    setGroups(
      groups.map(group =>
        group.id === groupId
          ? {
              ...group,
              members: group.members.filter(m => m !== member)
            }
          : group
      )
    );
  };

  const handleLeaveGroup = (groupId) => {
    // Remove the entire group instead of just removing the user
    setGroups(groups.filter(group => group.id !== groupId));
  };

  const navigateToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen w-screen text-white bg-gradient-to-br from-indigo-900 to-purple-900 overflow-x-hidden">
      <div className="p-6">
        {/* Header with Back Button */}
        <div className="p-4 bg-indigo-900">
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-white-700 text-white"
          >
            Back to Dashboard
          </button>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <h1 className="text-4xl font-bold text-white mb-8">Collaboration Hub</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Friends Section */}
            <div className="bg-white/80 rounded-lg p-6 shadow-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-indigo-900">Friends</h2>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Enter friend's name"
                  value={friendName}
                  onChange={(e) => setFriendName(e.target.value)}
                  className="flex-1 p-2 border rounded mr-2 text-black"
                />
                <button
                  onClick={handleAddFriend}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Add Friend
                </button>
              </div>
              <ul className="space-y-2">
                {friends.map((friend, index) => (
                  <li key={index} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span className="text-black">{friend}</span>
                    <button
                      onClick={() => handleRemoveFriend(friend)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Groups Section */}
            <div className="bg-white/80 rounded-lg p-6 shadow-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-indigo-900">Groups</h2>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Enter group name"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="flex-1 p-2 border rounded mr-2 text-black"
                />
                <button
                  onClick={handleAddGroup}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Create Group
                </button>
              </div>

              {groups.length === 0 ? (
                <p className="text-center text-gray-500 py-4">No groups found. Create a group to get started.</p>
              ) : (
                groups.map(group => (
                  <div key={group.id} className="bg-gray-900/80 text-white p-4 rounded shadow mb-4 backdrop-blur-sm">
                    <h2 className="text-xl font-semibold mb-2">{group.name}</h2>

                    <div className="mb-2">
                      <strong>Members:</strong>
                      <ul className="ml-4 list-disc">
                        {group.members.map((member, index) => (
                          <li key={index} className="flex justify-between items-center">
                            <span>{member}</span>
                            <button
                              onClick={() => handleRemoveMember(group.id, member)}
                              className="text-red-400 text-sm ml-2 hover:text-red-300 hover:underline"
                            >
                              Remove
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Member name"
                        value={selectedGroupId === group.id ? memberName : ''}
                        onChange={(e) => {
                          setSelectedGroupId(group.id);
                          setMemberName(e.target.value);
                        }}
                        className="p-2 rounded bg-gray-800 text-white w-1/3 border border-gray-700"
                      />
                      <button
                        onClick={() => handleAddMember(group.id)}
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      >
                        Add
                      </button>
                      {/* Changed from conditional rendering to always show Leave Group button */}
                      <button
                        onClick={() => handleLeaveGroup(group.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Leave Group
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborationPage;
