import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function TransactionsPage() {
  const transactions = [
    {
      id: '1',
      customer: 'John Doe',
      date: '2024-12-25',
      total: 'Rp 300,000',
      paymentStatus: 'Paid',
    },
    {
      id: '2',
      customer: 'Jane Smith',
      date: '2024-12-24',
      total: 'Rp 200,000',
      paymentStatus: 'Unpaid',
    },
    {
      id: '3',
      customer: 'Michael Brown',
      date: '2024-12-23',
      total: 'Rp 150,000',
      paymentStatus: 'Paid',
    },
    {
      id: '4',
      customer: 'Alice Johnson',
      date: '2024-12-22',
      total: 'Rp 100,000',
      paymentStatus: 'Unpaid',
    },
  ];

  const getPaymentStatusStyle = (status) => {
    switch (status) {
      case 'Paid':
        return styles.paidStatus;
      case 'Unpaid':
        return styles.unpaidStatus;
      default:
        return {};
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transactions</Text>
        <Text style={styles.headerSubtitle}>View all transaction history</Text>
      </View>

      {/* Transactions List */}
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionCard}>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionCustomer}>{item.customer}</Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
              <Text style={styles.transactionTotal}>{item.total}</Text>
            </View>
            <Text
              style={[
                styles.transactionStatus,
                getPaymentStatusStyle(item.paymentStatus),
              ]}
            >
              {item.paymentStatus}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.transactionList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    backgroundColor: '#1E88E5',
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#BBDEFB',
    marginTop: 8,
    textAlign: 'center',
  },
  transactionList: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  transactionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3,
    marginBottom: 16,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionDetails: {
    flex: 1,
  },
  transactionCustomer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  transactionDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  transactionTotal: {
    fontSize: 14,
    color: '#1E88E5',
    fontWeight: 'bold',
    marginTop: 4,
  },
  transactionStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  paidStatus: {
    backgroundColor: '#4CAF50',
    color: '#FFFFFF',
  },
  unpaidStatus: {
    backgroundColor: '#F44336',
    color: '#FFFFFF',
  },
});
