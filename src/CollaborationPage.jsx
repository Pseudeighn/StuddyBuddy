import React, { useState } from 'react';

const CollaborationPage = () => {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [memberName, setMemberName] = useState('');
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const handleAddGroup = () => {
    if (groupName.trim() === '') return;
    const newGroup = {
      id: Date.now(),
      name: groupName,
      members: []
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
    const currentUser = "You"; // Simulated current user
    setGroups(
      groups.map(group =>
        group.id === groupId
          ? {
              ...group,
              members: group.members.filter(m => m !== currentUser)
            }
          : group
      )
    );
  };

  return (
    <div className="p-6 text-white bg-gradient-to-br from-indigo-900 to-purple-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Collaboration</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="p-2 rounded text-black w-1/2 mr-2"
        />
        <button onClick={handleAddGroup} className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
          Add Group
        </button>
      </div>

      {groups.length === 0 ? (
        <p>No groups yet. Add one above.</p>
      ) : (
        groups.map(group => (
          <div key={group.id} className="bg-white text-black p-4 rounded shadow mb-4">
            <h2 className="text-xl font-semibold mb-2">{group.name}</h2>

            <div className="mb-2">
              <strong>Members:</strong>
              <ul className="ml-4 list-disc">
                {group.members.map((member, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{member}</span>
                    <button
                      onClick={() => handleRemoveMember(group.id, member)}
                      className="text-red-600 text-sm ml-2 hover:underline"
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
                className="p-2 rounded text-black w-1/3"
              />
              <button
                onClick={() => handleAddMember(group.id)}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Add Member
              </button>

              {group.members.includes("You") && (
                <button
                  onClick={() => handleLeaveGroup(group.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Leave Group
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CollaborationPage;
